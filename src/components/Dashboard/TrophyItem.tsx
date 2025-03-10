import type { TTrophy } from '@/interfaces/trophy'

type TrophyItemProps = {
  trophy: TTrophy,
}

const TrophyItem = ({ trophy }: TrophyItemProps) => {
  return (
    <div className='flex aspect-square items-center justify-center rounded-xl border border-solid border-black bg-slate-600'>
      <div className='text-center'>
        <p className='text-4xl uppercase'>
          {trophy.icon}
        </p>
        <p className='text-xs uppercase'>
          {trophy.title}
        </p>
      </div>
    </div>
  )
}

export default TrophyItem
