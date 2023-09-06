import SearchInput from 'components/SearchInput'
import SearchResultBox from 'components/SearchResultBox'
import { useAppSelector } from 'hooks/toolkithook'

const Search = () => {
  const { isSearchResultBoxOpen } = useAppSelector((state) => state.search)
  
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-sky-100'>
      <div className='mt-36 mb-auto rounded-2xl py-10 px-20'>
        <h2 className='text-3xl font-extrabold text-center mb-5'>
          국내 모든 임상시험 검색하고<br/>온라인으로 참여하기
        </h2>
        <SearchInput />
        {isSearchResultBoxOpen && <SearchResultBox />}
      </div>
    </div>
  )
}

export default Search