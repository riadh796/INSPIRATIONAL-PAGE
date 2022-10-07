import { configureStore } from "@reduxjs/toolkit";
import { goalsSliceReducer } from "./features/goals/GoalsSlice";


export default configureStore({
  reducer: {
    goals: goalsSliceReducer,
    
  },
});