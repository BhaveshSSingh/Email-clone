import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEmail: [],
  readEmail: [],
  unReadEmail: [],
  favEmail: [],
  //
  loading: false,
  error: "",
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    // addToAllEmails:(action){

    // },
    addToReadEmails: (state, action) => {
      state.readEmail.push(action.payload);
    },
    // unReadEmails:(){

    // }
    addToFavEmails(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToReadEmails, addToFavEmails } = emailSlice.actions;

export default emailSlice.reducer;

//
