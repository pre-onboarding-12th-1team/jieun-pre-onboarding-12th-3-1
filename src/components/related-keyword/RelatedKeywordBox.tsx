import RelatedKeywordItem from 'components/related-keyword/RelatedKeywordItem'
import { useAppSelector } from 'hooks/toolkithook'
import { Sick } from 'types/Search'

const RelatedKeywordBox = () => {  
  const { relatedKeywordList } = useAppSelector((state) => state.search)

  const firstIndex = 0
  const maxCount = 7
  const list = relatedKeywordList.slice(firstIndex, maxCount)

  return (
    <div className='z-10 absolute rounded-2xl py-2 px-5 bg-red-100 w-full h-auto'>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>연관검색어</p>
        <div className='mt-1'>
          {list.map((item: Sick, index) => (
            <RelatedKeywordItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedKeywordBox