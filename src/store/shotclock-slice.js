import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 24,
  shootingTeam: "home",
};

const shotclockSlice = createSlice({
  name: "shotclock",
  initialState: initialState,
  reducers: {
    decrementTime(state) {
      state.time -= 1;
    },
    resetTime(state) {
      state.time = 24;
    },
    switchTeam(state) {
      state.shootingTeam = state.shootingTeam === "home" ? "guest" : "home";
    },
  },
});

export const shotclockActions = shotclockSlice.actions;
export default shotclockSlice;
