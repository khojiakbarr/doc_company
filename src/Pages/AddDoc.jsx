import React from "react";
import Navbar from "../components/Navbar";
import FormControl from "../components/FormControl";

export default function AddDoc() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-[30px]">Add Doc</h1>
      <div className="container mx-auto">
        <FormControl type={"Doc"} />
      </div>
    </>
  );
}
