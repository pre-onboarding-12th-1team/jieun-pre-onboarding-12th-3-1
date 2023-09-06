import RecommendedItem from 'components/recommended-keyword/RecommendedItem'
import { useAppSelector } from 'hooks/toolkithook'
import { Sick } from 'types/Search'

const RecommendedBox = () => {  
  const { recommendedKeywordList } = useAppSelector((state) => state.search)
  
  return (
    <div className='rounded-2xl py-2 px-5 bg-white w-full h-auto'>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>추천검색어</p>
        <div className='mt-1'>
          {recommendedKeywordList.length === 0 &&
            <p className='text-center font-semibold text-neutral-500 mb-10'>
              해당하는 검색어가 없습니다
            </p>
          }
          <div className='overflow-y-auto max-h-[25rem]'>
            {recommendedKeywordList.map((item: Sick, index) => (
              <RecommendedItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendedBox