import React from "react";
import { useSelector } from "react-redux";

export default function DoctorCard({ doctor, id, type }) {
  const clients = useSelector((state) => state.clients.clients);
  console.log(clients);

  return (
    <details className="w-[500px] cursor-pointer  px-[10px] py-[5px] border-[1px] border-black rounded-[10px]">
      <summary className="text-[20px] font-[500]">{`${doctor} | ${type}`}</summary>
      <p>Sick peoples: </p>
      {clients.map((client) => {
        if (client.doctorId === id) {
          return (
            <div key={client.id} className="border-[1px] border-black p-[5px]">
              <p>Name: {client.name}</p>
              <p>Type: {client.type}</p>
            </div>
          );
        }
      })}
    </details>
  );
}
