import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const EMAIL_URL = " https://flipkart-email-mock.now.sh/";

const initialState = {
  loading: false,
  listOfEmails: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllEmails.fulfilled, (state, action) => {
      state.loading = false;
      state.listOfEmails = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAllEmails.rejected, (state, action) => {
      state.loading = false;
      state.listOfEmails = [];
      state.error = action.error.message;
    });
  },
});

export default emailSlice.reducer;
