import React from "react";
import Navbar from "../components/Navbar";

export default function dashboard() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-[30px]">Dashboard</h1>
      <div className="w-full flex justify-center">
        <details className="w-[500px]">
          <summary>Click me</summary>
          <p>Content goes here</p>
        </details>
      </div>
    </div>
  );
}
