import type { Timestamp } from 'firebase/firestore'

export type TUserRequest = {
  firstName?: string
  lastName?: string
  email: string
  firebaseId: string
}

export type TUser = {
  firstName?: string
  lastName?: string
  email: string
  firebaseId: string
  createdAt: Timestamp
}