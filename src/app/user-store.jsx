import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/user-slice";

export const userStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
