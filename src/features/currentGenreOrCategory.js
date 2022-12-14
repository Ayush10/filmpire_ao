import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdorCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdorCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
