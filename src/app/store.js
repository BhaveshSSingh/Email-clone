import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/emailSlice";
import readEmailReducer from "./features/readEmailSlice";

const store = configureStore({
  reducer: {
    email: emailReducer,
    readEmail: readEmailReducer,
  },
});

export default store;
