import { useAppSelector } from 'hooks/toolkithook'
import RecentBox from 'components/recent-keyword/RecentBox'
import RecommendedBox from 'components/recommended-keyword/RecommendedBox'

const SearchResultBox = () => {
  const { recommendedKeywordList } = useAppSelector((state) => state.search)
  
  return (
    <div className='mt-3 w-[30rem]'>
      {recommendedKeywordList.length === 0 
        ? <RecentBox />
        : <RecommendedBox /> }
    </div>
  )
}

export default SearchResultBox