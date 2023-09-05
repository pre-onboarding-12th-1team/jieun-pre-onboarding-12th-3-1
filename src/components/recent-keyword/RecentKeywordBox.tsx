import RecentKeywordItem from 'components/recent-keyword/RecentKeywordItem'
import TopSearchedItem from 'components/recent-keyword/RecommendKeywordItem'
import { useAppSelector } from 'hooks/toolkithook'

const RecentKeywordBox = () => {
  const { recentKeywordList } = useAppSelector((state) => state.search)

  return (
    <div className='rounded-2xl py-2 px-5 bg-white w-full'>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>최근검색어</p>
        {/* TODO: 최근검색어 로컬캐싱 */}
        <div className='mt-1'>
          {recentKeywordList.length === 0 &&
            <p className='text-center font-semibold text-neutral-500'>
              최근 검색어가 없습니다
            </p>
          }
          {recentKeywordList.map((item: string, index) => (
            <RecentKeywordItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>인기검색어</p>
        <div className='mt-1 flex'>
          {/* TODO: 인기검색어 */}
          <TopSearchedItem />
          <TopSearchedItem />
        </div>
      </div>
    </div>
  )
}

export default RecentKeywordBox