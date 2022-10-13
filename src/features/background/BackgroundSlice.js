import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const fetchBackground = createAsyncThunk(
  "background/fetchBackground",
  async (api, thunkAPI) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=xQ7d05ZUdEdl4mXUR9731gU0bE4dJakfoqCsGMz3bbY&count=5`
    );

    const json = await response.json();

    return json;
  }
);

export const BackgroundSlice = createSlice({
  name: "background",
  initialState: {
    count: 0,
    background: [],
    currentBackground: "",
  },
  reducers: {
    changeCurrentBackgroundFront: (state, action) => {
      // Get array of background pictures
      const currentState = current(state);
      const background = currentState.background;

      // Get current count for modulo calculation and update count
      const i = currentState.count + 1;
      state.count = i;

      // Get length of array for modulo calculation
      const len = currentState.background.length;

      // Update the background
      state.currentBackground = background[i % len];
    },
    changeCurrentBackgroundBack: (state, action) => {
      // Get array of background pictures
      const currentState = current(state);
      const background = currentState.background;

      // Get current count for modulo calculation and update count
      let i = currentState.count - 1;
      state.count = i;

      // Get length of array for modulo calculation
      const len = currentState.background.length;

      // Make sure that numbers are always positive
      if (i < 0) {
        i = i * -1;
        state.count = i;
      }

      // Update the background
      state.currentBackground = background[i % len];
    },
  },
  extraReducers: {
    [fetchBackground.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchBackground.fulfilled]: (state, action) => {
      // Array with 5 links containing images
      action.payload.forEach((obj) => state.background.push(obj.urls.regular));
      state.currentBackground = action.payload[0].urls.regular;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchBackground.rejected]: (state, action) => {
      console.log("Splash API call failed.");
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectBackground = (state) => state.background.background;

export const selectCurrentBackground = (state) =>
  state.background.currentBackground;

export const { changeCurrentBackgroundFront, changeCurrentBackgroundBack } =
  BackgroundSlice.actions;

export const backgroundSliceReducer = BackgroundSlice.reducer;