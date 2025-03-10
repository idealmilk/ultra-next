import type { TRacePlan } from '@/interfaces/raceplan'

export const racePlanData: TRacePlan[] = [
  {
    id: 1,
    active: false,
    race: {
      id: 1,
      title: 'Izu Trail Journey 70k',
      date: '2024-12-09T00:00:00.000Z',
      type: 'trail',
      distance: 68.8,
    },
  },
  {
    id: 2,
    active: false,
    race: {
      id: 2,
      title: 'Heizan 70k',
      date: '2025-03-09T00:00:00.000Z',
      type: 'trail',
      distance: 70,
    },
  },
  {
    id: 3,
    active: true,
    race: {
      id: 3,
      title: 'OKUSHINANO100',
      date: '2025-06-09T00:00:00.000Z',
      type: 'trail',
      distance: 70,
    },
  },
]