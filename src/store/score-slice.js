import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: {
    name: "home",
    score: 0,
  },
  guest: {
    name: "guest",
    score: 0,
  },
};

const scoreSlice = createSlice({
  name: "score",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      const searchTeam = action.payload.team; // based on the team name
      const foundKey = Object.keys(state).find(
        (key) => state[key].name === searchTeam
      ); // liburon ta kung diin na team team nakapaluob ang team name. e.g. home3 hay sa suyod ng home team.
      state[foundKey].score += action.payload.point;
    },

    reset: (state) => {
      state.home.score = 0;
      state.guest.score = 0;
    },
  },
});

export const scoreActions = scoreSlice.actions;
export default scoreSlice;
