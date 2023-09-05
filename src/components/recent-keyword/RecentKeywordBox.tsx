import RecentKeywordItem from 'components/recent-keyword/RecentKeywordItem'
import RecommendKeywordItem from 'components/recent-keyword/RecommendKeywordItem'

const RecentKeywordBox = () => {
  return (
    <div className='rounded-2xl py-2 px-5 bg-white w-full'>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>최근검색어</p>
        <div className='mt-1'>
          {/* TODO: 로컬캐싱한 최근검색어 뿌려주기 */}
          <RecentKeywordItem />
          <RecentKeywordItem />
        </div>
      </div>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>추천검색어</p>
        <div className='mt-1 flex'>
          {/* TODO: 고정으로 지정한 추천검색어 뿌려주기 */}
          <RecommendKeywordItem />
          <RecommendKeywordItem />
        </div>
      </div>
    </div>
  )
}

export default RecentKeywordBox