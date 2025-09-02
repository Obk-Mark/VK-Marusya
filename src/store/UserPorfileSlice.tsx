import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../api/auth/types';

interface UserState {
  data: IUser | null;
  isUserLogin: boolean;
}

const initialState: UserState = {
  data: null,
  isUserLogin: false,
};

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.isUserLogin = !!action.payload;
    },
    clearUser: (state) => {
      state.data = null;
      state.isUserLogin = false;
    },
  },
});

export const { setUser, clearUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;