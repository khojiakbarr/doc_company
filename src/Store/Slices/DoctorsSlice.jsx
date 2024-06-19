import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const DoctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [{ id: 0, name: "Zerikkan Doc", type: "glaznoy" }],
  },

  reducers: {
    addDoc(state, action) {
      state.doctors = [...state.doctors, { ...action.payload, id: uuid() }];
    },
    editDoc(state, action) {
      state.doctors = state.doctors.map((doc) =>
        doc.id === action.payload.id ? { ...doc, ...action.payload.data } : doc
      );
    },
    deleteDoc(state, action) {
      state.doctors = state.doctors.filter((doc) => doc.id !== action.payload);
    },
  },
});

export const { addDoc, editDoc, deleteDoc } = DoctorsSlice.actions;

export default DoctorsSlice.reducer;
