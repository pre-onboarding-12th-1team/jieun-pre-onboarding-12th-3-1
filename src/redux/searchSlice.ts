import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../types/Search";

const initialState: SearchState = {
  isSearchBoxOpen: false
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchBoxOpen: (state, action) => {
      state.isSearchBoxOpen = action.payload
    }
  }
})

export default searchSlice.reducer

export const { setSearchBoxOpen } = searchSlice.actions