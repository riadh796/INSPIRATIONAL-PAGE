import { configureStore } from "@reduxjs/toolkit";
import { goalsSliceReducer } from "./features/goals/GoalsSlice";
import { weatherSliceReducer } from "./features/weather/WeatherSlice";
import { quoteSliceReducer } from "./features/quote/QuoteSlice";

export default configureStore({
  reducer: {
    goals: goalsSliceReducer,
    weather: weatherSliceReducer,
    quote: quoteSliceReducer,
  },
});