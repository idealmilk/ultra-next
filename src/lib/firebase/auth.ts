
// import {
//   GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, 
// } from 'firebase/auth'

// import { auth } from './config'
// import { createUser, getUserByFirebaseId } from './firestore/users'

// type Credentials = {
//   email: string;
//   password: string;
// };

// export const signInWithEmail = async (credentials: Credentials) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       credentials.email,
//       credentials.password,
//     )

//     const user = userCredential.user

//     if (!user) throw new Error('User not found after sign-in')

//     return userCredential
//   }
//   catch (err) {
//     return err
//   }
// }

// export const signUp = async (credentials: Credentials) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       credentials.email,
//       credentials.password,
//     )

//     const user = userCredential.user

//     if (!user) throw new Error('User not found after sign-up')

//     await createUser({ firebaseId: user.uid, email: credentials.email })
//   }
//   catch (error) {
//     // eslint-disable-next-line no-console
//     console.error('Error in SignUpAPI:', error)
//     throw error
//   }
// }

// export async function signInWithGoogle() {
//   const provider = new GoogleAuthProvider()

//   try {
//     const userCredential = await signInWithPopup(auth, provider)
//     const user = userCredential.user

//     if (!user) throw new Error('User not found after Google sign-in')

//     const existingUser = await getUserByFirebaseId(user.uid)

//     if (!existingUser) {
//       console.log('No user found, creating new user')
//       await createUser({
//         firebaseId: user.uid,
//         email: user.email || '',
//         firstName: user.displayName?.split(' ')[0] || '',
//         lastName: user.displayName?.split(' ')[1] || '',
//       })
//     }
//     else {
//       console.log('Existing user:', existingUser)
//     }
//   }
//   catch (error) {
//     console.error('Error signing in with Google', error)
//   }
// }

// export async function signOut() {
//   try {
//     return auth.signOut()
//   }
//   catch (error) {
//     // eslint-disable-next-line no-console
//     console.error('Error signing out with Google', error)
//   }
// }