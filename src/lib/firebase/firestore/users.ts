// import {
//   addDoc, collection, getDocs, query, serverTimestamp, where, 
// } from 'firebase/firestore'

// import type { TUser, TUserRequest } from '@/interfaces/users'
// import { firestore } from '@/lib/firebase/config'

// const usersRef = collection(firestore, 'users')

// export const createUser = async (userRequest: TUserRequest) => {
//   await addDoc(usersRef, {
//     ...userRequest,
//     createdAt: serverTimestamp(),
//   })
// }

// export const getUserByFirebaseId = async (firebaseId: string): Promise<TUser | null> => {
//   const q = query(usersRef, where('firebaseId', '==', firebaseId))

//   const snapshot = await getDocs(q)

//   if (snapshot.empty) {
//     return null
//   }

//   const user = snapshot.docs[0].data() as TUser
  
//   return user
// }
