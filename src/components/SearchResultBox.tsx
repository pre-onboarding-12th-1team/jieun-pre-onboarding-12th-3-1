import { useAppSelector } from 'hooks/toolkithook'
import RecentBox from 'components/recent-keyword/RecentBox'
import RecommendedBox from 'components/recommended-keyword/RecommendedBox'

const SearchResultBox = () => {
  const { keyword } = useAppSelector((state) => state.search)
  
  return (
    <div className='mt-3 w-[30rem]'>
      {keyword
        ? <RecommendedBox />
        : <RecentBox />}
    </div>
  )
}

export default SearchResultBox