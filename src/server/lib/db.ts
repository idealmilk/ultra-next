import mongoose from 'mongoose'
import { MONGO_URL } from '@/server/config'

let db: mongoose.Connection | null = null

export default async function getDatabase() {
  if (db) {
    return Promise.resolve(db)
  }

  // Connect to database
  db = mongoose.connection
  if (db.readyState) {
    return Promise.resolve(db)
  }

  /* eslint-disable no-console */
  db.on('connecting', () => console.log('connecting to MongoDB...'))
  db.on('error', (error) => console.error(`Error in MongoDb connection: ${error}`))
  db.on('connected', () => console.log('MongoDB connected!'))
  db.once('open', () => console.log('MongoDB connection opened!'))
  db.on('reconnected', () => console.log('MongoDB reconnected!'))
  db.on('disconnected', () => console.log('MongoDB disconnected!'))

  /* eslint-enable no-console */

  await mongoose.connect(MONGO_URL)
  return db
}
