import { createSlice } from '@reduxjs/toolkit';
import { TMoviesArray } from '../api/movies/types';

interface FavoritesState {
  data: TMoviesArray | null;
}

const initialState: FavoritesState = {
  data: null
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.data = action.payload;
    },
    clearFavorites: (state) => {
      state.data = null;
    },
  },
});

export const { setFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;