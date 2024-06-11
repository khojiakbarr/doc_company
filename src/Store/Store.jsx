import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },  
});

export default store;
