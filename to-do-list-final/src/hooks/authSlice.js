import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";

const url = process.env.REACT_APP_BASE_URL;

const userToken = localStorage.getItem("access-token")
  ? localStorage.getItem("access-token")
  : null;
const userId = localStorage.getItem("uid") ? localStorage.getItem("uid") : null;
const userClient = localStorage.getItem("client")
  ? localStorage.getItem("client")
  : null;

const userInfo = localStorage.getItem("user-info")
  ? localStorage.getItem("user-info")
  : null;

const initialState = {
  loading: false,
  userInfo,
  userToken,
  userId,
  userClient,
  error: null,
  success: false,
};

export const signUp = createAsyncThunk(
  `${url}/auth`,
  async (params, thunkApi) => {
    const response = await authApi.signUp(params);
    return response;
  }
);

export const signIn = createAsyncThunk(
  `${url}/auth/sign_in`,
  async (params, thunkApi) => {
    const response = await authApi.signIn(params);
    localStorage.setItem("access-token", response.headers.get("access-token"));
    localStorage.setItem("uid", response.headers.get("uid"));
    localStorage.setItem("client", response.headers.get("client"));
    // localStorage.setItem("email", response.data("email"));
    // localStorage.setItem("name", response.data("name"));
    return response;
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access-token");
      localStorage.removeItem("uid");
      localStorage.removeItem("client");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.userId = null;
      state.userClient = null;
      state.error = null;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [signIn.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data;
      state.userToken = payload.headers.get("access-token");
      state.userId = payload.headers.get("uid");
      state.userClient = payload.headers.get("client");
    },
    [signIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
