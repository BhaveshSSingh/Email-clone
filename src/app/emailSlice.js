import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEmail: [],
  readEmail: [],
  unReadEmail: [],
  favEmail: [],
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
    //     unReadEmails:(state,action)=>{
    //  unread = allEmail - readEmail
    /*
    if email.id not in readEmail then push it in unread Email
    */
    //     },
    addToFavEmails(state, action) {
      state.favEmail.push(action.payload);
    },
  },
});

export const { addToReadEmails, addToFavEmails } = emailSlice.actions;

export default emailSlice.reducer;

//
