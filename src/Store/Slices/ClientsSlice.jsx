import { createSlice } from "@reduxjs/toolkit";

const ClientsSlice = createSlice({
  name: "clients",
  initialState: {
    cleints: [{ id: 0, name: "Kasal", type: "Qoli singan" }],
  },
  reducers: {
    addClient(state, action) {
      state.cleints = [
        ...state,
        { id: state.cleints.length, client: action.payload, isCompadet: false },
      ];
    },

    editClient(state, action) {
      state.cleints = state.cleints.map((client) => {
        if (client.id === action.payload.id) {
          return action.payload;
        } else {
          return client;
        }
      });
    },

    deleteClient(state, action) {
      state.cleints = state.cleints.filter(
        (client) => client.id !== action.payload
      );
    },

    isCompadet(state, action) {
      state.cleints = state.cleints.map((client) => {
        if (client.id === action.payload.id) {
          client.isCompadet = action.payload.isCompadet;
        }
        return client;
      });
    },
  },
});
export const { addClient, editClient, deleteClient } = ClientsSlice.actions;
export default ClientsSlice.reducer;
