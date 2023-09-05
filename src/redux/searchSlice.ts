import { createSlice } from '@reduxjs/toolkit'
import  useLocalCaching  from 'hooks/useLocalCaching'
import { SearchState } from 'types/Search'

const initialState: SearchState = {
  isSearchResultBoxOpen: false,
  recentKeywordList: [],
  recommendedKeywordList: []
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResultBoxOpen: (state, action) => {
      state.isSearchResultBoxOpen = action.payload
    },
    setRecentKeywordList: (state, action) => {
      state.recentKeywordList = [...state.recentKeywordList, action.payload]
      useLocalCaching()
    },
    setrecommendedKeywordList: (state, action) => {
      state.recommendedKeywordList = action.payload
    },
  }
})

export default searchSlice.reducer

export const { 
  setSearchResultBoxOpen, setRecentKeywordList, setrecommendedKeywordList 
} = searchSlice.actions