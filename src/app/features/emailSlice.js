import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const EMAIL_URL = " https://flipkart-email-mock.now.sh/";
const EMAIL_BODY_URL = "https://flipkart-email-mock.vercel.app/?id=";

const initialState = {
  loading: false,
  listOfEmails: [],
  unReadEmails: [],
  readEmails: [],
  favEmails: [],
  emailBody: [],
  clickedEmail: [],
  error: "",
};

export const fetchAllEmails = createAsyncThunk(
  "emails/fetchEmails",
  async () => {
    const data = await axios.get(EMAIL_URL);
    return data;
  }
);

export const fetchEmailBody = createAsyncThunk(
  "emails/fetchEmailBody",
  async (id) => {
    const data = await axios.get(EMAIL_BODY_URL + id);
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
    },
    addToUnReadEmails: (state, action) => {
      const newUn = state.unReadEmails.filter(
        (email) => email.id !== action.payload.id
      );
      state.unReadEmails = newUn;
    },
    addToFavEmails: (state) => {
      const fav = state.clickedEmail;
      state.favEmails.push(fav);
    },

    saveClickedEmail: (state, action) => {
      state.clickedEmail = action.payload;
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
    builder.addCase(fetchEmailBody.fulfilled, (state, action) => {
      state.emailBody = action.payload;
      state.loading = false;
    });
  },
});

export const {
  addToUnReadEmails,
  addToReadEmails,
  addToFavEmails,
  saveClickedEmail,
} = emailSlice.actions;

export default emailSlice.reducer;
