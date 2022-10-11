import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
  "quote/fetchWeather",
  async (api, thunkAPI) => {
    const response = await fetch("https://quotes.rest/qod.json");

    const json = await response.json();

    return json;
  }
);

export const QuoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: undefined,
  },
  reducers: {},
  extraReducers: {
    [fetchQuote.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchQuote.fulfilled]: (state, action) => {
      state.quote = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchQuote.rejected]: (state, action) => {
      console.log("Quote API call failed.");
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectQuote = (state) => state.quote;

export const quoteSliceReducer = QuoteSlice.reducer;