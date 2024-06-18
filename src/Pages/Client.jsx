import React from "react";
import Navbar from "../components/Navbar";
import FormControl from "../components/FormControl";

export default function client() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-[30px]">Add Client</h1>

      <FormControl type={"Sick"} />
    </div>
  );
}
