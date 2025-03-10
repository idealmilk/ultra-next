import type { AppProps } from 'next/app'
// import { UserProvider } from '@/context/User'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <UserProvider>
    <Component {...pageProps} />
    // </UserProvider>
  )
}
