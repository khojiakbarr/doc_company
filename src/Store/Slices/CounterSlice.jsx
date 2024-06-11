import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    dicrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, dicrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
