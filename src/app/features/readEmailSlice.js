import { createSlice } from "@reduxjs/toolkit";

const readEmailSlice = createSlice({
  name: "readEmails",
  initialState: [],
  reducers: {
    addToReadEmails: (state, action) => {
      const exist = state.find((pro) => pro.id === action.payload.id);
      if (!exist) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToReadEmails } = readEmailSlice.actions;

export default readEmailSlice.reducer;
