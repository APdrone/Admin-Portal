import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    userActions: userReducer,
  },
});

export default store;
