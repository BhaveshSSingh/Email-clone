import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/emailSlice";
import messageReducer from "./features/messageSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    email: emailReducer,
    message: messageReducer,
    user: userReducer,
  },
});

export default store;
