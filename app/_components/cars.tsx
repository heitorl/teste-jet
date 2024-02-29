"use client";
import { FaStar } from "react-icons/fa";
import CarInfo from "./carInfo";
import { LuMoreVertical } from "react-icons/lu";
import Image from "next/image";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface CarProps {
  id: number;
  name: string;
  imgUrl: string;
  next_reservation: string;
  status: string;
  rating: React.ReactNode;
  actions: React.ReactNode;
}

export interface ListCarProps {
  cars: CarProps[];
}

const Cars = ({ cars }: ListCarProps) => {
  const [selectedCars, setSelectedCars] = useState<CarProps[]>([]);

  const handleCarClick = (car: CarProps) => {
    const isSelected = selectedCars.some(
      (selectedCar) => selectedCar.id === car.id
    );

    if (isSelected) {
      setSelectedCars(
        selectedCars.filter((selectedCar) => selectedCar.id !== car.id)
      );
    } else {
      setSelectedCars([...selectedCars, car]);
    }
  };

  return (
    <div className="w-[375px] h-[325px] lg:w-[287px] lg:h-[380px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="p-4 bg-gray-50">
        <h2 className="text-gray-500 font-semibold text-xs">CAR</h2>
      </div>
      <ul className="">
        {cars.map((car, index) => (
          <li
            onClick={() => handleCarClick(car)}
            className="h-[90px] lg:h-[56px] px-4 py-1 flex gap-2 items-center cursor-pointer"
            key={index}
          >
            <div className="h-[85px] w-[85px] relative lg:h-[46px] lg:w-[48px]">
              {selectedCars.some(
                (selectedCar) => selectedCar.id === car.id
              ) && (
                <IoIosCheckmarkCircleOutline className="bg-green-500 absolute z-[1000] rounded-full top-4 left-0 lg:top-2" />
              )}
              <Image
                className="rounded-lg relative"
                src={car.imgUrl}
                alt={car.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col py-2 justify-between lg:justify-center h-full flex-1">
              <div className="flex justify-between">
                <p className="font-bold lg:font-normal text-sm text-gray-900">
                  {car.name}
                </p>
                <LuMoreVertical className="lg:hidden" />
              </div>
              <div className="flex gap-1 lg:hidden">
                <p className="text-sm text-gray-500">Next reservation:</p>
                <CarInfo car={car} displayType="next_reservation" />
              </div>
              <div className="flex gap-2 lg:hidden">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
