import { useState } from 'react'
import Link from 'next/link'
import { raceData } from '@/data/races'
import type { TRace } from '@/interfaces/race'

const Hero = () => {
  const [ selectedRaceId, setSelectedRaceId ] = useState<TRace['id']>()

  return (
    <section className="flex h-96 w-full items-center justify-center">
      <div className='text-center'>
        <h1>Plan your next race!</h1>

        <form className="mx-auto mb-6 max-w-sm">
          <label htmlFor="countries" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
          <select id="countries" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
            <option selected>Choose a race</option>
            {raceData.map((race) => (
              <option
                key={race.id}
                value={race.id}
                onClick={() => setSelectedRaceId(race.id)}
              >
                {race.title}
              </option>
            ))}
          </select>
        </form>

        <Link
          href={`/create?raceId=${selectedRaceId}`}
          className="rounded-md border border-slate-600 bg-slate-200 px-2 py-1"
        >
          Go!
        </Link>
      </div>
    </section>
  )
}

export default Hero
