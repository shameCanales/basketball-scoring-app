import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./score-slice";
import shotclockSlice from "./shotclock-slice";

const store = configureStore({
  reducer: {
    score: scoreSlice.reducer,
    shotclock: shotclockSlice.reducer,
  },
});

export default store;
