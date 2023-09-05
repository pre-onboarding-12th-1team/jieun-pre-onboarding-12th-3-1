import { useAppSelector } from 'hooks/toolkithook'
import RecentKeyword from 'components/RecentKeyword'
import RecommendKeyword from 'components/RecommendKeyword'
import RelatedKeyword from 'components/RelatedKeyword'

const SearchResultBox = () => {
  const { isSearchResultBoxOpen } = useAppSelector((state) => state.search)

  return (
    <div className='relative mt-3'>
      {isSearchResultBoxOpen &&
        <div className='z-10 absolute rounded-2xl py-2 px-5 bg-red-100 w-full h-auto'>
          <div className='mt-2'>
            <p className='text-sm text-neutral-500'>연관검색어</p>
            <div className='mt-1'>
              {/* TODO: api호출해서 keyword에 대한 연관검색어 뿌려주기 */}
              <RelatedKeyword />
              <RelatedKeyword />
            </div>
          </div>
        </div>
      }

          <div className='rounded-2xl py-2 px-5 bg-white w-full'>
            <div className='mt-2'>
              <p className='text-sm text-neutral-500'>최근검색어</p>
              <div className='mt-1'>
                {/* TODO: 로컬캐싱한 최근검색어 뿌려주기 */}
                <RecentKeyword />
                <RecentKeyword />
              </div>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-neutral-500'>추천검색어</p>
              <div className='mt-1 flex'>
                {/* TODO: 고정으로 지정한 추천검색어 뿌려주기 */}
                <RecommendKeyword />
                <RecommendKeyword />
              </div>
            </div>
          </div>

          
        </div>
  )
}

export default SearchResultBox