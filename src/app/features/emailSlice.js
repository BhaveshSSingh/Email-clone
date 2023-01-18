import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const EMAIL_URL = " https://flipkart-email-mock.now.sh/";

const initialState = {
  loading: false,
  listOfEmails: [],
  unReadEmails: [],
  readEmails: [],
  error: "",
};

export const fetchAllEmails = createAsyncThunk(
  "emails/fetchEmails",
  async () => {
    const data = await axios.get(EMAIL_URL);
    return data;
  }
);

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    addToReadEmails: (state, action) => {
      const exist = state.readEmails.find(
        (email) => email.id === action.payload.id
      );
      if (!exist) {
        state.readEmails.push(action.payload);
      }
      console.log(`${state.readEmails.length}readEmails`);
    },
    addToUnReadEmails: (state, action) => {
      const newUn = state.unReadEmails.filter(
        (email) => email.id !== action.payload.id
      );
      state.unReadEmails = newUn;

      console.log(state.unReadEmails.length);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllEmails.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfEmails = action.payload.data?.list;
      state.unReadEmails = action.payload.data?.list;
      state.error = "";
    });
    builder.addCase(fetchAllEmails.rejected, (state, action) => {
      state.loading = false;
      state.listOfEmails = [];
      state.error = action.error.message;
    });
  },
});

export const { addToUnReadEmails, addToReadEmails } = emailSlice.actions;

export default emailSlice.reducer;
