import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import RelatedKeyword from '../components/RelatedKeyword'

const Search = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='mt-36 mb-auto bg-sky-100 rounded-2xl py-10 px-20'>
        <h2 className='text-3xl font-extrabold text-center mb-5'>
          국내 모든 임상시험 검색하고<br/>온라인으로 참여하기
        </h2>
        <div className='flex rounded-full justify-between py-2 px-5 w-[30rem] bg-white'>
          <input 
            placeholder='질환명을 입력해주세요'
            className='text-neutral-500 text-lg font-semibold' 
          />
          <div>
            <MagnifyingGlassIcon className='h-6 w-6' />
          </div>
        </div>
        <div className='mt-3 rounded-2xl py-2 px-5 bg-white'>
          <p className='text-sm text-neutral-500'>추천검색어</p>
          <div className='mt-1'>
            <RelatedKeyword />
            <RelatedKeyword />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search