import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  userData: {username: string} | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{username: string}>) {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    clearUser(state) {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
