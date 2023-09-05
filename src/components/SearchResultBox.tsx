import { useAppSelector } from 'hooks/toolkithook'
import RelatedKeywordBox from 'components/related-keyword/RelatedKeywordBox'
import RecentKeywordBox from 'components/recent-keyword/RecentKeywordBox'

const SearchResultBox = () => {
  const { relatedKeywordList } = useAppSelector((state) => state.search)
  
  return (
    <div className='mt-3 w-[30rem]'>
      {relatedKeywordList.length === 0 
        ? <RecentKeywordBox />
        : <RelatedKeywordBox /> }
    </div>
  )
}

export default SearchResultBox