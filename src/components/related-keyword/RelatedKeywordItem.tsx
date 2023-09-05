import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Sick } from 'types/Search'

const RelatedKeywordItem = ({ item }: { item: Sick }) => {
  return (
    <div className='flex items-center gap-2 text-lg'>
      <div>
        <MagnifyingGlassIcon className='h-4 w-4' />
      </div>
      <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
        {item.sickNm}
      </div>
    </div>
  )
}

export default RelatedKeywordItem