import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    selectedMessage: null,
    sendMessageIsOpen: false,
    numberOfSentEmails: 0,
  },
  reducers: {
    selectMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
    openSendMessage: (state, action) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    numberOfSentMessages: (state) => {
      state.numberOfSentEmails += 1;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  selectMessage,
  numberOfSentMessages,
} = messageSlice.actions;

export default messageSlice.reducer;
