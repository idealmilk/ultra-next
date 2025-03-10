import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <div className="absolute top-0 z-10 translate-y-[100vh]">
        <h1>Home</h1>     
      </div>
    </Layout>
  )
}

export default HomePage