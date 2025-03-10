import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  
  return (
    <footer className="z-10 h-80 w-full bg-black p-3 text-sm text-white">
      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
        <Link href="/history" className={`rounded-2xl border border-black px-3 py-1 text-sm uppercase  transition-all hover:bg-black hover:text-white ${router.pathname.includes('/history') && 'bg-black text-white'}`}>History</Link>
        <Link href="/mountains" className={`rounded-2xl border border-black px-3 py-1 text-sm uppercase  transition-all hover:bg-black hover:text-white ${router.pathname.includes('/mountains') && 'bg-black text-white'}`}>Mountains</Link>
      </nav>
    </footer>

  )
}

export default Footer
