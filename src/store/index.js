import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./score-slice";

const store = configureStore({
  reducer: {
    score: scoreSlice.reducer,
  },
});

export default store;