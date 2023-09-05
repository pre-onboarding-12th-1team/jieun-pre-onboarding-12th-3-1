import { createSlice } from '@reduxjs/toolkit'
import { SearchState } from 'types/Search'

const initialState: SearchState = {
  isSearchResultBoxOpen: false,
  recentKeywordList: []
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResultBoxOpen: (state, action) => {
      state.isSearchResultBoxOpen = action.payload
    },
    setRecentKeywordList: (state, action) => {
      console.log(action.payload)
      state.recentKeywordList = [...state.recentKeywordList, action.payload]
    },
  }
})

export default searchSlice.reducer

export const { setSearchResultBoxOpen, setRecentKeywordList } = searchSlice.actions