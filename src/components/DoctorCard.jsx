import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoopingClients from "./LoopingClients";
import { deleteDoc, editDoc } from "../Store/Slices/DoctorsSlice";

export default function DoctorCard({ doctor, id, type }) {
  const clients = useSelector((state) => state.clients.clients);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const [docInfo, setDocInfo] = useState({
    name: doctor,
    type: type,
  });

  function saveDocInfo() {
    dispatch(editDoc({ id: id, data: docInfo }));
  }

  return (
    <details className="w-[500px] cursor-pointer px-[10px] py-[5px] border-[1px] border-black rounded-[10px]">
      <summary className="text-[20px] font-[500]">{`${doctor} -- ${type}`}</summary>
      {!isEditing ? (
        <div className="flex gap-[10px]">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="border-[1px] border-black px-[5px] py-[3px] rounded-[7px]"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteDoc(id))}
            className="border-[1px] border-black px-[5px] py-[3px] rounded-[7px]"
          >
            Delete
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-[10px]">
            <input
              className="px-[7px] py-[5px] border-[1px] border-black rounded-[10px]"
              type="text"
              value={docInfo.name}
              onChange={(e) => setDocInfo({ ...docInfo, name: e.target.value })}
            />
            <input
              className="px-[7px] py-[5px] border-[1px] border-black rounded-[10px]"
              type="text"
              value={docInfo.type}
              onChange={(e) => setDocInfo({ ...docInfo, type: e.target.value })}
            />
          </div>
          <button
            className="border-[1px] border-black px-[5px] py-[3px] rounded-[7px] w-full mt-[10px] bg-orange-100"
            onClick={() => {
              saveDocInfo();
              setIsEditing(!isEditing);
            }}
          >
            Save
          </button>
        </>
      )}
      <p>Sick peoples: </p>

      {clients.map((client) => {
        if (client.doctorId == id) {
          return (
            <LoopingClients
              clientId={client.id}
              clientName={client.name}
              clientType={client.type}
              key={client.id}
            />
          );
        }
      })}
    </details>
  );
}
