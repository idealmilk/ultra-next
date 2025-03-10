import mongoose from 'mongoose'
import StoryModel from './schemas/story'
import type { TStory } from '@/interfaces/story'

import type { FilterQuery } from 'mongoose'

export const getStoryById = async (id: string) => {
  const result = await StoryModel
    .findOne({
      _id: new mongoose.Types.ObjectId(id),
      deletedAt: undefined,
    })
    .exec()
  console.log('result model: ', result)
  if (!result) {
    return
  }

  if ('error' in result) {
    return result
  }

  return result.privateInfo
}

export const getStoryListPerPage = async (
  query: FilterQuery<TStory>, page = 1, perPage = 20,
) => {
  const result = await StoryModel
    .find(query)
    .sort({ limitedAt: -1 })
    .limit(perPage)
    .skip(perPage * (page - 1))

  if ('error' in result) {
    return result
  }

  return result.map((story) => story.publicInfo)
}

export default StoryModel
