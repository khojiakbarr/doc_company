import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteClient, editClient } from "../Store/Slices/ClientsSlice";

export default function LoopingClients({ clientId, clientName, clientType }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isEditing: false,
  });

  const [saveClients, setSaveClients] = useState({
    name: clientName,
    type: clientType,
  });

  function SaveClients() {
    dispatch(editClient({ data: saveClients, id: clientId }));
  }

  return (
    <div className="border-[1px] border-black p-3 rounded-[10px]">
      {!state.isEditing ? (
        <div className="flex justify-between">
          <div>
            <h1>Ismi: {clientName}</h1>
            <p>Kasal turi: {clientType}</p>
          </div>
          <div className="flex gap-[10px] ">
            <button
              onClick={() => setState({ isEditing: !state.isEditing })}
              className="border-[1px] border-black px-[5px] py-[3px] rounded-[7px] bg-orange-100"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteClient(clientId))}
              className="border-[1px] border-black px-[5px] py-[3px] rounded-[7px] bg-orange-100"
            >
              Delite
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between gap-[10px]">
          <div className="flex flex-col w-full">
            <input
              className="px-[7px] py-[5px] border-[1px] border-black rounded-[10px] mb-[10px]  "
              type="text"
              value={saveClients.name}
              placeholder={saveClients.clientName}
              onChange={(e) =>
                setSaveClients({ ...saveClients, name: e.target.value })
              }
            />
            <input
              className="px-[7px] py-[5px] border-[1px] border-black rounded-[10px]  "
              type="text"
              value={saveClients.type}
              onChange={(e) =>
                setSaveClients({ ...saveClients, type: e.target.value })
              }
            />
          </div>
          <button
            className="border-[1px] border-black px-[5px] py-[3px] rounded-[7px] bg-orange-100"
            onClick={() => {
              SaveClients();
              setState({ isEditing: !state.isEditing });
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
