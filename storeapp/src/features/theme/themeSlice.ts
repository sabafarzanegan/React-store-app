import { ApplyTheme } from "@/lib/Applytheme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Theme = "dark" | "light" | "system";

export type themeState = {
  theme: Theme;
};

const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";
  ApplyTheme(theme);
  return theme;
};
const initialState = {
  theme: initializeTheme(),
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      ApplyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
