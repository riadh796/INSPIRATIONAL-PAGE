import { configureStore } from "@reduxjs/toolkit";
import { goalsSliceReducer } from "./features/goals/GoalsSlice";
import { weatherSliceReducer } from "./features/weather/WeatherSlice";


export default configureStore({
  reducer: {
    goals: goalsSliceReducer,
    weather: weatherSliceReducer,
  },
});