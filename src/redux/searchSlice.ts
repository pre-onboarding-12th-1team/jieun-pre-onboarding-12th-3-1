import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../types/Search";

const initialState: SearchState = {
  isSearchResultBoxOpen: false
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResultBoxOpen: (state, action) => {
      state.isSearchResultBoxOpen = action.payload
    }
  }
})

export default searchSlice.reducer

export const { setSearchResultBoxOpen } = searchSlice.actions