import mongoose, { Schema } from 'mongoose'
import { nanoid } from 'nanoid'
import type { TStory } from '@/interfaces/story'

const StorySchema = new Schema<TStory>({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  title: String,
  description: String,
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
  // deletedAt: Date,
})

StorySchema
  .virtual('id')
  .get(function getStoryId() {
    return this._id
  })

StorySchema
  .virtual('publicInfo')
  .get(function getPublicStoryInfo() {
    return {
      id: this._id,
      title: this.title,
      description: this.description,
      // createdAt: this.createdAt,
      // updatedAt: this.updatedAt,
      // deletedAt: this.deletedAt,
    }
  })

StorySchema
  .virtual('privateInfo')
  .get(function getPrivateStoryInfo() {
    return {
      id: this._id,
      title: this.title,
      description: this.description,
      // createdAt: this.createdAt,
      // updatedAt: this.updatedAt,
      // deletedAt: this.deletedAt,
    }
  })

StorySchema
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .pre('save', function onSave(this: any, next: any) {
    const now = Date.now()
    this.updatedAt = now
    next()
  })

StorySchema.set('toObject', { virtuals: true })
StorySchema.set('toJSON', { virtuals: true })

const { models } = mongoose

const StoryModel = models.Story
  ? mongoose.model<TStory>('Story')
  : mongoose.model<TStory>('Story', StorySchema)

export default StoryModel
