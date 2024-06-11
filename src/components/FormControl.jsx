import React from "react";
import { useForm } from "react-hook-form";

export default function FormControl({ type }) {
  const { handleSubmit, register, reset } = useForm();
  return type == "Doc" ? (
    <form className="p-[20px] flex flex-col gap-[10px] border-[1px] border-black bg-zinc-200">
      <input
        className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
        placeholder="Name Doctor"
        type="text"
      />
      <input
        className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
        placeholder="Type of Doctor"
        type="text"
      />
      <button className=" bg-orange-100 text-[20px] font-bold py-[7px] px-[5px] border-[1px] border-black rounded-[15px]">
        Submit
      </button>
    </form>
  ) : (
    <form className="p-[20px] flex flex-col gap-[10px] border-[1px] border-black bg-zinc-200">
      <input
        placeholder="Name Client "
        type="text"
        className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
      />
      <input
        placeholder="Sick type "
        type="text"
        className="p-[5px] border-[1px] border-blackrounded-[15px] rounded-[5px]"
      />
      <button className=" bg-orange-100 text-[20px] font-bold py-[7px] px-[5px] border-[1px] border-black rounded-[15px]">
        Submit
      </button>
    </form>
  );
}
