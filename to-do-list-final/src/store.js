import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./hooks/authSlice";
import taskListSlice from "./hooks/taskListSlice";

const store = configureStore({
  reducer: {
    user: authSlice,
    taskList: taskListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
