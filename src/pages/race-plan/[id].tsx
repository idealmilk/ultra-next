import { useRouter } from 'next/router'

import { racePlanData } from '@/data/racePlans'
import Layout from '@/components/Layout'
import RacePlan from '@/views/RacePlanView'

const RacePlanPage = () => {
  const router = useRouter()

  const { id, create } = router.query
  const racePlan = racePlanData.find((item) => item.id === Number(id))

  if (!racePlan) return <div>Loading...</div>

  return (
    <Layout>
      <RacePlan racePlan={racePlan} create={create === 'true'} />
    </Layout>
  )
}

export default RacePlanPage
