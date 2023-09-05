import { useAppSelector } from 'hooks/toolkithook'
import RelatedKeywordBox from 'components/related-keyword/RelatedKeywordBox'
import RecentKeywordBox from 'components/recent-keyword/RecentKeywordBox'

const SearchResultBox = () => {
  const { isSearchResultBoxOpen } = useAppSelector((state) => state.search)
  return (
    <>
    {isSearchResultBoxOpen && 
      <div className='relative mt-3'>
        <RelatedKeywordBox /> 
        <RecentKeywordBox />
      </div>
    }
    </>
  )
}

export default SearchResultBox