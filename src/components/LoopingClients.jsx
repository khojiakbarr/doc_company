import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function LoopingClients() {
  const clients = useSelector((state) => state.clients.clients);
  useEffect(() => {
    console.log(clients);
  }, []);
  return (
    <div className="border-[1px] border-black">
    </div>
  );
}
