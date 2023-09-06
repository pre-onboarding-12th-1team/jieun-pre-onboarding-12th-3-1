import { createSlice } from '@reduxjs/toolkit';
import { SearchState } from 'types/Search';

const initialState: SearchState = {
  keyword: '',
  isSearchResultBoxOpen: false,
  recentKeywordList: [],
  recommendedKeywordList: [],
  selectedIndex: -1
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload
    },
    setSearchResultBoxOpen: (state, action) => {
      state.isSearchResultBoxOpen = action.payload
    },
    setRecentKeywordList: (state, action) => {
      state.recentKeywordList = [...state.recentKeywordList, action.payload]
      //TODO: 로컬캐싱을 여기서 해야할까
    },
    setRecommendedKeywordList: (state, action) => {
      state.recommendedKeywordList = action.payload
    },
    setSelectedIndex: (state, action) => {
      state.selectedIndex = action.payload
    },
  }
})

export default searchSlice.reducer

export const { 
  setKeyword, setSearchResultBoxOpen, setRecentKeywordList, 
  setRecommendedKeywordList, setSelectedIndex
} = searchSlice.actions