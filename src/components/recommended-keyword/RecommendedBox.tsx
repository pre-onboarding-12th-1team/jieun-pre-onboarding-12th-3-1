import RecommendedItem from 'components/recommended-keyword/RecommendedItem'
import { useAppSelector } from 'hooks/toolkithook'
import { Sick } from 'types/Search'

const RecommendedBox = () => {  
  const { relatedKeywordList } = useAppSelector((state) => state.search)

  const firstIndex = 0
  const maxCount = 7
  const list = relatedKeywordList.slice(firstIndex, maxCount)

  return (
    <div className='rounded-2xl py-2 px-5 bg-white w-full h-auto'>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>연관검색어</p>
        <div className='mt-1'>
          {list.map((item: Sick, index) => (
            <RecommendedItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendedBox