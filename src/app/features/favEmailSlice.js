import { createSlice } from "@reduxjs/toolkit";

const favEmailSlice = createSlice({
  name: "favEmails",
  initialState: [],
  reducers: {
    addToReadEmails: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToReadEmails } = favEmailSlice.actions;

export default favEmailSlice.reducer;
