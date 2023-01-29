import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/emailSlice";
import messageReducer from "./features/messageSlice";

const store = configureStore({
  reducer: {
    email: emailReducer,
    message: messageReducer,
  },
});

export default store;
