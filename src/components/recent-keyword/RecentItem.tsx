import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const RecentItem = ({ item }: { item: string }) => {
  return (
    <div className='flex items-center gap-2 text-lg'>
      <div>
        <MagnifyingGlassIcon className='h-4 w-4' />
      </div>
      <div className='whitespace-nowrap overflow-hidden text-ellipsis'>
        {item}
      </div>
    </div>
  )
}

export default RecentItem