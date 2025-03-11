import { useRouter } from 'next/router'
import { raceData } from '@/data/races'
import Layout from '@/components/Layout'
import CreateView from '@/views/CreateView'

const CreatePage = () => {
  const router = useRouter()

  const { raceId } = router.query
  const race = raceData.find((item) => item.id === Number(raceId))

  if (!race) return <div>Loading...</div>

  return (
    <Layout>
      <CreateView race={race} />
    </Layout>
  )
}

export default CreatePage