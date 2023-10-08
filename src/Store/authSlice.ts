import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/index";


interface AuthState {
  name?: string;
  token?: string | null;
  registerStatus?: string;
  registerError?: string;
  loginStatus?: string;
  loginError?: string;
  userLoaded: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const auth = (state: RootState) => state.auth

export default authSlice.reducer;
