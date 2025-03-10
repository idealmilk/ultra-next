import { useRouter } from 'next/router'

import { racePlanData } from '@/data/racePlans'
import Layout from '@/components/Layout'
import RacePlan from '@/views/RacePlanView'

const MountainPage = () => {
  const router = useRouter()

  const { id } = router.query

  const racePlan = racePlanData.find((item) => item.id === Number(id))

  console.log(racePlan)

  if (!racePlan) return <div>Loading...</div>

  return (
    <Layout>
      <RacePlan racePlan={racePlan} />
    </Layout>
  )
}

export default MountainPage
