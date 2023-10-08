/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserData } from "./../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/index";
import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";
import { UserRegistrationData } from "../types/types";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

interface AuthState {
  name?: string;
  currentUser?: string | null;
  registerStatus?: string;
  registerError?: string;
  loginStatus?: string;
  loginError?: string;
  userLoaded: boolean;
  error?: string;
}

const initialState: AuthState = {
  currentUser: localStorage.getItem("currentUser"),
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk<UserData, UserRegistrationData>(
  "auth/registerUser",
  async (UserData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiBaseUrl}/register`, UserData);
      console.log(res?.data?.success);

      localStorage.setItem("currentUser", res?.data);
      return res?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      Swal.fire({
        text: "Please wait...while your request is being process",
        icon: "info",
        allowOutsideClick: false,
      });
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { status, message } = action.payload;
      if (status) {
        toast(message);
        window.location.replace("/login");
        return {
          ...state,
          registerStatus: "success",
        };
      } else {
        toast.error(message);
        return {
          ...state,
          registerStatus: "failed",
          registerError: message,
        };
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      if (typeof action.payload === "string") {
        toast.error(action.payload);
      } else {
        // Handle the case where the message is not a string
      }
      return { ...state, registerStatus: "pending" };
    });
  },
});

export const auth = (state: RootState) => state.auth;

export default authSlice.reducer;
