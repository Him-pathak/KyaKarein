import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    mode : "dark",
    user : {},
    value: null,
  },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogout: (state) => {
      state.user = null;
    },
  },
});

export const { setLogin, setLogout, setMode } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
