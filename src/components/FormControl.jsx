import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addDoc } from "../Store/Slices/DoctorsSlice";
import { addClient } from "../Store/Slices/ClientsSlice";

export default function FormControl({ type }) {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  const doctors = useSelector((state) => state.doctors.doctors);

  useEffect(() => {
    console.log(doctors);
  }, []);

  function submitDoc(data) {
    console.log(data);
    dispatch(addDoc(data));
    reset();
  }
  function submitClient(data) {
    console.log(data);
    dispatch(addClient(data));
    reset();
  }

  return type === "Doc" ? (
    <div className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit((data) => submitDoc(data))}
        className=" w-[500px] p-[20px] flex flex-col gap-[10px] border-[1px] border-black bg-zinc-200"
      >
        <input
          className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
          placeholder="Name Doctor"
          type="text"
          {...register("name")}
        />
        <input
          className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
          placeholder="Type of Doctor"
          type="text"
          {...register("type")}
        />
        <button className=" bg-orange-100 text-[20px] font-bold py-[7px] px-[5px] border-[1px] border-black rounded-[15px]">
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit((data) => submitClient(data))}
        className=" w-[500px] p-[20px] flex flex-col gap-[10px] border-[1px] border-black bg-zinc-200"
      >
        <input
          placeholder="Name Client "
          type="text"
          className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
          {...register("name")}
        />
        <input
          placeholder="Sick type "
          type="text"
          className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
          {...register("type")}
        />
        <select className="p-[5px]" {...register("doctorId")}>
          {doctors.map((doc) => {
            return (
              <option key={doc.id} value={doc.id}>
                {doc.name}
              </option>
            );
          })}
        </select>
        <button className=" bg-orange-100 text-[20px] font-bold py-[7px] px-[5px] border-[1px] border-black rounded-[15px]">
          Submit
        </button>
      </form>
    </div>
  );
}
