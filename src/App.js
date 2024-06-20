import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDoc from "./Pages/AddDoc";
import Client from "./Pages/Client";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AddDoc />} />
      <Route path="/client" element={<Client />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="*"
        element={<h1 className="text-[40px] font-[600] text-center">404</h1>}
      />
    </Routes>
  );
}
