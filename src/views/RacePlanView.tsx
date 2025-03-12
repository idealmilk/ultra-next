import { useEffect, useState } from 'react'
import PageHeader from '@/components/PageHeader'
import TrainingCalendar from '@/components/RacePlan/TrainingCalendar'
import Tabs from '@/components/Tabs'
import type { TRacePlan } from '@/interfaces/raceplan'

const tabData = [
  {
    header: 'Training',
    content: <TrainingCalendar />,
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
  create: boolean
}

const RacePlanView = ({ racePlan, create }: RacePlanViewProps) => {
  const [ isGenerating, setIsGenerating ] = useState(create)
  
  const { race } = racePlan

  useEffect(() => {
    if (isGenerating) {
      const timer = setTimeout(() => {
        setIsGenerating(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [ isGenerating ])

  return (
    <div>
      <PageHeader title={race.title} />
      <div className='px-40 pb-20 pt-10'>
        {isGenerating ? (
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-xl font-semibold">Generating race plan</h1>
            <div className="size-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#d0ff00]" />
          </div>
        ) : (
          <Tabs data={tabData} />
        )}
      </div>
    </div>
  )
}

export default RacePlanView
