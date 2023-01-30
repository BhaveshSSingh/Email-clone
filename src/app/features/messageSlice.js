import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    selectedMessage: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMessage } =
  messageSlice.actions;

export default messageSlice.reducer;
