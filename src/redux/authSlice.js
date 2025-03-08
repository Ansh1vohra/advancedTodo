import { createSlice } from "@reduxjs/toolkit";

// Load authentication state from localStorage
const storedAuth = localStorage.getItem("isAuthenticated") === "true";

const initialState = {
  isAuthenticated: storedAuth,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("tasks"); // Clear tasks on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
