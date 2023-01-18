import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/emailSlice";

const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});

export default store;
