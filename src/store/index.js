import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    score: budgetSlice.reducer,
  },
});

export default store;