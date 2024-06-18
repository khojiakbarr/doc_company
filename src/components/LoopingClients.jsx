import React from "react";
import { useSelector } from "react-redux";

export default function LoopingClients() {
  const clients = useSelector((state) => state.clients.clients);

  return clients.map((client) => (
    <div className="border-[1px] border-black p-3">
      <h1>Ismi: {client.name}</h1>
      <p>Kasal turi: {client.type}</p>
    </div>
  ));
}
