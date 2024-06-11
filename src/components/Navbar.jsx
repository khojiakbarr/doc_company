import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-orange-100 py-[20px]">
      <nav className="container">
        <ul className="flex justify-center gap-[30px]">
          <Link to="/">
            <li className=" font-extrabold underline">AddDoctor</li>
          </Link>
          <Link to="/client">
            <li className=" font-extrabold underline">Client</li>
          </Link>
          <Link to="/dashboard">
            <li className=" font-extrabold underline">Dashboard</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
