import React from "react";
import { CarPropsinfo } from "../_interfaces/carProps";

const CarInfo = ({ car, displayType }: CarPropsinfo) => {
  return (
    <p
      className={`text-sm text-gray-900 ${
        displayType === "status"
          ? "rounded-md py-1 px-3 bg-green-100 w-[72px] text-xs text-center text-green-800 font-semibold"
          : displayType === "next_reservation"
          ? "text-gray-500"
          : "font-bold"
      }`}
    >
      {car[displayType]}
    </p>
  );
};

export default CarInfo;
