import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {},
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});

export const budgetActions = scoreSlice.actions;
export default scoreSlice;
