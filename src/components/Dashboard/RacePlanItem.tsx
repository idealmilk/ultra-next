import Link from 'next/link'

import type { TRacePlan } from '@/interfaces/raceplan'

type RaceItemProps = {
  racePlan: TRacePlan,
}

const RacePlanItem = ({ racePlan }: RaceItemProps) => {
  const { id, active, race } = racePlan
  return (
    <Link href={`/race-plan/${id}`}>
      <div className='flex flex-col gap-2 '>
        <div className='w-full rounded-xl border border-solid border-black px-10 py-5'>
          <p className='text-lg uppercase'>
            {race.title}
          </p>
          <div className='flex items-center gap-2'>
            <div className={`size-2 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'}`}/>
            <p className='text-xs uppercase'>
              {active ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RacePlanItem