import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { getSick } from 'apis/search'
import { useAppDispatch, useAppSelector } from 'hooks/toolkithook'
import { useState } from 'react'
import {
  setKeyword, setRecentKeywordList, setRecommendedKeywordList, setSearchResultBoxOpen,
  setSelectedIndex
} from 'redux/searchSlice'
import { twMerge } from 'tailwind-merge'

const SearchInput = () => {
  //const giveDivElementFocusingEvent = -1
  const [inputKeyword, setInputKeyword] = useState('')
  const dispatch = useAppDispatch()
  const { 
    keyword, isSearchResultBoxOpen, selectedIndex, 
    recommendedKeywordList, recentKeywordList } = useAppSelector((state) => state.search)
  

  const openSearchResultBox = () => {
    dispatch(setSearchResultBoxOpen(true))
  }
  const closeSearchResultBox = () => {
    dispatch(setSearchResultBoxOpen(false))
  }

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'ArrowDown') {
      dispatch(setSelectedIndex(
        Math.min(selectedIndex + 1, recommendedKeywordList.length - 1)
      ))
    }
    if(e.key === 'ArrowUp') {
      dispatch(setSelectedIndex(
        Math.max(0, selectedIndex - 1)
      ))
    }
}

  const typeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.currentTarget.value)
    dispatch(setKeyword(e.currentTarget.value))
    getSick(e.currentTarget.value).then(
      (result) => dispatch(setRecommendedKeywordList(result))
    )
  }

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setRecentKeywordList(inputKeyword))
    setInputKeyword('')
    dispatch(setKeyword(''))
  }
  
  return (
    <form 
      //tabIndex={giveDivElementFocusingEvent}
      onFocus={openSearchResultBox}
      onBlur={closeSearchResultBox}
      onSubmit={search}
      className={twMerge(
        'flex rounded-full justify-between py-2 px-5 w-[30rem] bg-white gap-2',
        isSearchResultBoxOpen && 'border-2 border-blue-500'
      )}
    >
      <input
        value={inputKeyword} 
        onChange={typeKeyword}
        onKeyDown={keyPress}
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