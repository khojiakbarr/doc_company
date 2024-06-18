import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const ClientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [{ id: uuid(), name: "Kasal", doctorId: 0, type: "Qoli singan" }],
  },
  reducers: {
    addClient(state, action) {
      const newClients = [
        ...state.clients,
        {
          ...action.payload.data,
          id: uuid(),
          isCompadet: false,
        },
      ];

      return newClients;
    },

    editClient(state, action) {
      state.clients = state.clients.map((client) => {
        if (client.id === action.payload.id) {
          return action.payload.data;
        } else {
          return client;
        }
      });
    },

    deleteClient(state, action) {
      state.clients = state.clients.filter(
        (client) => client.id !== action.payload
      );
    },

    isCompadet(state, action) {
      state.clients = state.clients.map((client) => {
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
