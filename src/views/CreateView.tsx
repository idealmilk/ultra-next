import dayjs from 'dayjs'

import CreateForm from '@/components/CreateForm'
import type { TRace } from '@/interfaces/race'

type CreateViewProps = {
  race: TRace
}

const CreateView = ({ race }: CreateViewProps) => {
  return (
    <div className='mb-40 mt-20 w-full px-40'>
      <div className='rounded-3xl bg-[#d0ff00] p-10'>
        <div className='mx-auto w-3/5 text-center'>
          <p className='italic'>Generate your <br/>personalised race plan for</p>
          <h1 className='mt-2 text-6xl font-bold'>{race.title}</h1>
        </div>

        <div className='mt-5'>
          <div className='text-center'>
            <p className='mb-4'>{dayjs(race.date).format('MMMM D, YYYY')}</p>
            <p>Type: <span className='capitalize'>{race.type}</span></p>
            <p>Distance: <span>{race.distance}km</span></p>
            <p>Elevation: <span>{race.elevation}m</span></p>
          </div>
        </div>
        
        <CreateForm />
      </div>
    </div>
  )
}

export default CreateView
