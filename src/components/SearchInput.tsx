import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/toolkithook'
import { setSearchResultBoxOpen } from '../redux/searchSlice'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { twMerge } from "tailwind-merge"

const SearchInput = () => {
  const giveDivElementFocusingEvent = -1
  //TODO: 키워드 상태값 여기둬도되는건가 어따둘지 생각
  const [keyword, setKeyword] = useState<string>('')

  const dispatch = useAppDispatch()
  const { isSearchResultBoxOpen } = useAppSelector((state) => state.search)
  
  const typeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  const openSearchResultBox = () => {
    console.log('열기')
    dispatch(setSearchResultBoxOpen(true))
  }

  const closeSearchResultBox = () => {
    console.log('닫기')
    dispatch(setSearchResultBoxOpen(false))
  }

  return (
    <div 
      tabIndex={giveDivElementFocusingEvent}
      onFocus={openSearchResultBox}
      onBlur={closeSearchResultBox}
      className={twMerge(
        'flex rounded-full justify-between py-2 px-5 w-[30rem] bg-white gap-2',
        isSearchResultBoxOpen && 'border-2 border-blue-600'
      )}
    >
      <input 
        onChange={typeKeyword}
        type='text'
        placeholder='질환명을 입력해주세요'
        className='text-neutral-500 text-lg font-semibold w-full' 
      />
      <div className='bg-blue-300 p-2 rounded-full'>
        <MagnifyingGlassIcon className='h-6 w-6' />
      </div>
    </div>
  )
}

export default SearchInput