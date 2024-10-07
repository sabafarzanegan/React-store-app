import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type User = {
  username: string;
  jwt: string;
};

export type UserState = {
  user: User | null;
};
const getUserFromStorage = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return JSON.parse(user);
};
const initialState = {
  user: getUserFromStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
