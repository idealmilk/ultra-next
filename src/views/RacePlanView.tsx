import PageHeader from '@/components/PageHeader'
import Tabs from '@/components/Tabs'
import type { TRacePlan } from '@/interfaces/raceplan'

const tabData = [
  {
    header: 'Training',
    content: 'hello',
  },
  {
    header: 'Nutrition',
    content: 'hello baby',
  },
  {
    header: 'Race Plan',
    content: 'hello swaggy',
  },
  {
    header: 'Gear',
    content: 'hello gear',
  },
  {
    header: 'Rest',
    content: 'hello rest',
  },
]

type RacePlanViewProps = {
  racePlan: TRacePlan
}

const RacePlanView = ({ racePlan }: RacePlanViewProps) => {
  const { race } = racePlan
  return (
    <div>
      <PageHeader title={race.title} />
      <div className='px-40 pb-20 pt-10'>
        <Tabs data={tabData} />
      </div>
    </div>
  )
}

export default RacePlanView
