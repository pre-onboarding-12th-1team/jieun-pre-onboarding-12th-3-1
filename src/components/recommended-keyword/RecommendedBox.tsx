import RecommendedItem from 'components/recommended-keyword/RecommendedItem'
import { useAppSelector } from 'hooks/toolkithook'
import { Sick } from 'types/Search'

const RecommendedBox = () => {  
  const { recommendedKeywordList } = useAppSelector((state) => state.search)

  const firstIndex = 0
  const maxCount = 7
  const list = recommendedKeywordList.slice(firstIndex, maxCount)

  return (
    <div className='rounded-2xl py-2 px-5 bg-white w-full h-auto'>
      <div className='mt-2 pb-10'>
        <p className='text-sm text-neutral-500'>추천검색어</p>
        <div className='mt-1'>
        {recommendedKeywordList.length === 0 &&
          <p className='text-center font-semibold text-neutral-500'>
            해당하는 검색어가 없습니다
          </p>
        }
          {list.map((item: Sick, index) => (
            <RecommendedItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendedBox