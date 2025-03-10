import { racePlanData } from '@/data/racePlans'
import { userTrophiesData } from '@/data/trophies'
import RaceItem from '@/components/Dashboard/RacePlanItem'
import TrophyItem from '@/components/Dashboard/TrophyItem'

const sortedRacePlans = racePlanData.sort((a, b) => {
  if (a.active && !b.active) return -1
  if (!a.active && b.active) return 1

  return new Date(b.race.date).getTime() - new Date(a.race.date).getTime()
})

const DashboardView = () => {
  return (
    <div className='w-full px-40 pb-40 pt-10'>
      <div className='flex w-full gap-10'>
        <div className='grow'>
          <h2 className='text-2xl font-semibold uppercase'>Race Plans</h2>
          <div className='flex w-full flex-col gap-2 pt-5'>
            {sortedRacePlans.map((racePlan) => 
              <RaceItem key={racePlan.id} racePlan={racePlan} />,
            )}
          </div>
        </div>

        <div className='w-1/4'>
          <h2 className='text-2xl font-semibold uppercase'>Trophies</h2>
          <div className='grid grid-cols-3 gap-2 pt-5'>
            {userTrophiesData.map((userTrophy) => 
              <TrophyItem key={userTrophy.id} trophy={userTrophy.trophy} />,
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardView
