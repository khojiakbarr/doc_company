import React from "react";
import Navbar from "../components/Navbar";
import DoctorCard from "../components/DoctorCard";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const doctors = useSelector((state) => state.doctors.doctors);
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-[30px]">Dashboard</h1>
      <div className="w-full flex justify-center flex-col items-center gap-[10px]">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor.name}
            id={doctor.id}
            type={doctor.type}
          />
        ))}
      </div>
    </div>
  );
}
