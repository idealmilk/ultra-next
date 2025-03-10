import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useAuth } from '@/hooks/useAuth'
import { signOut } from '@/lib/firebase/auth'

const Header = () => {
  const router = useRouter()
  // const user = useAuth()
  
  return (
    <header className="fixed top-0 z-10 w-full border-b border-black p-3 text-sm text-black backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <p className="">
            百名山
          </p>
        </Link>
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
          <Link href="/history" className={`rounded-2xl border border-black px-3 py-1 text-sm uppercase  transition-all hover:bg-black hover:text-white ${router.pathname.includes('/history') && 'bg-black text-white'}`}>
            History
          </Link>
          <Link href="/mountains" className={`rounded-2xl border border-black px-3 py-1 text-sm uppercase  transition-all hover:bg-black hover:text-white ${router.pathname.includes('/mountains') && 'bg-black text-white'}`}>
            Mountains
          </Link>
          <Link href="/map" className={`rounded-2xl border border-black px-3 py-1 text-sm uppercase  transition-all hover:bg-black hover:text-white ${router.pathname.includes('/map') && 'bg-black text-white'}`}>
            Map
          </Link>
        </nav>
        {/* {user ? ( */}
        <div className='flex gap-4'>
          <button onClick={signOut}>
              Logout
          </button>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </div>
        {/* ) : (
          <div>
            <Link href="/login">
              Login
            </Link>
            <Link href="/register">
              Sign Up
            </Link>
          </div>
        )} */}
      </div>
    </header>

  )
}

export default Header
