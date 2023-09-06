import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from 'hooks/toolkithook'
import { twMerge } from 'tailwind-merge'
import { Sick } from 'types/Search'

const RecommendedItem = ({ index, item }: { index: number, item: Sick }) => {
  const { selectedIndex } = useAppSelector((state) => state.search)

  return (
    <div className={twMerge(
      'flex items-center gap-2 text-lg mb-1',
      selectedIndex === index && 'bg-red-100'
    )}>
      <div>
        <MagnifyingGlassIcon className='h-4 w-4' />
      </div>
      <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
        {item.sickNm}
      </div>
    </div>
    
  )
}

export default RecommendedItem