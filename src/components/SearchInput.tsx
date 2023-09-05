import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/toolkithook'
import { setRecentKeywordList, setRelatedKeywordList, setSearchResultBoxOpen } from 'redux/searchSlice'
import { twMerge } from 'tailwind-merge'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { getSick } from 'apis/search'

const SearchInput = () => {
  const giveDivElementFocusingEvent = -1
  //TODO: 키워드 상태값 여기둬도되는건가 어따둘지 생각
  const [keyword, setKeyword] = useState<string>('')

  const dispatch = useAppDispatch()
  const { isSearchResultBoxOpen } = useAppSelector((state) => state.search)
  
  const typeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
    getSick(e.currentTarget.value).then(
      (result) => dispatch(setRelatedKeywordList(result))
    )
  }

  const openSearchResultBox = () => {
    console.log('열기')
    dispatch(setSearchResultBoxOpen(true))
  }

  const closeSearchResultBox = () => {
    console.log('닫기')
    dispatch(setSearchResultBoxOpen(false))
  }

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setRecentKeywordList(keyword))
  }

  return (
    <form 
      tabIndex={giveDivElementFocusingEvent}
      onFocus={openSearchResultBox}
      onBlur={closeSearchResultBox}
      onSubmit={search}
      className={twMerge(
        'flex rounded-full justify-between py-2 px-5 w-[30rem] bg-white gap-2',
        isSearchResultBoxOpen && 'border-2 border-blue-500'
      )}
    >
      <input
        onChange={typeKeyword}
        placeholder='질환명을 입력해주세요'
        className='text-neutral-500 text-lg font-semibold w-full px-2' 
      />
      <button
        type='submit' 
        className='bg-blue-500 p-2 rounded-full'
      >
        <MagnifyingGlassIcon className='h-6 w-6 text-white' />
      </button>
    </form>
  )
}

export default SearchInput