import { createSlice } from '@reduxjs/toolkit'
import { SearchState } from 'types/Search'

const initialState: SearchState = {
  isSearchResultBoxOpen: false,
  recentKeywordList: [],
  relatedKeywordList: []
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
    },
    setRelatedKeywordList: (state, action) => {
      state.relatedKeywordList = action.payload
    },
  }
})

export default searchSlice.reducer

export const { setSearchResultBoxOpen, setRecentKeywordList, setRelatedKeywordList } = searchSlice.actions