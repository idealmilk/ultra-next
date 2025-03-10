import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'

const MapPage = () => {
  const Map = useMemo(() => dynamic(
    () => import('@/components/map/'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    },
  ), [])

  return (
    <Layout>
      <Map posix={[ 4.79029, -75.69003 ]} />
    </Layout>
  )
}

export default MapPage