import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const RelatedKeyword = () => {
  return (
    <div className='flex items-center gap-2 text-lg'>
      <div>
        <MagnifyingGlassIcon className='h-4 w-4' />
      </div>
      <div>키워드</div>
    </div>
  )
}

export default RelatedKeyword