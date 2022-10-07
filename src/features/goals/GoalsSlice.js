import { createSlice } from "@reduxjs/toolkit";

export const GoalsSlice = createSlice({
  name: "goals",
  initialState: {
    goals: [
      {
        id: 0,
        text: "Eat a cake",
      },
      {
        id: 1,
        text: "Water plants",
      },
      
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },

    removeGoal: (state, action) => {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload.id);
    },
  },
});

export const selectGoals = (state) => state.goals;

export const selectLatestId = (state) =>
  state.goals.goals[state.goals.goals.length - 1];
export const { addGoal, removeGoal } = GoalsSlice.actions;

export const goalsSliceReducer = GoalsSlice.reducer;