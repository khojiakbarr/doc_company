import { createSlice } from "@reduxjs/toolkit";

const DoctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
  },

  reducers: {
    addDoc(state, action) {
      state.doctors = [
        ...state.doctors,
        { ...action.payload, id: state.doctors.length },
      ];
    },
    editDoc(state, action) {
      state.doctors = state.doctors.map((doc) =>
        doc.id === action.payload.id ? action.payload : doc
      );
    },
    deleteDoc(state, action) {
      state.doctors = state.doctors.filter((doc) => doc.id !== action.payload);
    },
  },
});

export const { addDoc, editDoc, deleteDoc } = DoctorsSlice.actions;

export default DoctorsSlice.reducer;
