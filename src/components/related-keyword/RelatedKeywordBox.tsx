import RelatedKeywordItem from "components/related-keyword/RelatedKeywordItem"

const RelatedKeywordBox = () => {  
  return (
    <div className='z-10 absolute rounded-2xl py-2 px-5 bg-red-100 w-full h-auto'>
      <div className='mt-2'>
        <p className='text-sm text-neutral-500'>연관검색어</p>
        <div className='mt-1'>
          {/* TODO: api호출해서 keyword에 대한 연관검색어 뿌려주기 */}
          <RelatedKeywordItem />
          <RelatedKeywordItem />
        </div>
      </div>
    </div>
  )
}

export default RelatedKeywordBox