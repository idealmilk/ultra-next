import type { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex w-full grow flex-col">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout