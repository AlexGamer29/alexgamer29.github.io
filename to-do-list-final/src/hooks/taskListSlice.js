import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";
import todoListApi from "../api/todoListApi";

const url = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  taskList: [],
  error: null,
  success: false,
};

export const getTaskList = createAsyncThunk(
  `${url}/task_lists/`,
  async (params, thunkApi) => {
    const response = await todoListApi.getTaskList();
    return response;
  }
);

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {},
  extraReducers: {
    [getTaskList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getTaskList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.taskList = payload;
      state.success = true;
    },
    [getTaskList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default taskListSlice.reducer;
