import { configureStore } from "@reduxjs/toolkit";
import DoctorsSlice from "./Slices/DoctorsSlice";
import ClientsSlice from "./Slices/ClientsSlice";

const store = configureStore({
  reducer: {
    doctors: DoctorsSlice,
    clients: ClientsSlice,
  },
});

export default store;
