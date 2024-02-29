import { FaStar } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";
import ListCarInfo from "./_components/listCarInfo";
import { CarProps } from "./_interfaces/carProps";
import Cars from "./_components/cars";

export default function Home() {
  const cars: CarProps[] = [
    {
      id: 1,
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      id: 2,
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      id: 3,
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      id: 4,
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      id: 5,
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      id: 6,
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex shadow-xl rounded-lg">
        <Cars cars={cars} />
        <div className="hidden lg:block w-[287px] h-[380px] ">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">
              NEXT RESERVATION
            </h2>
          </div>
          <ul>
            <ListCarInfo cars={cars} displayType="next_reservation" />
          </ul>
        </div>
        <div className="hidden lg:block w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">STATUS</h2>
          </div>
          <ul>
            <ListCarInfo cars={cars} displayType="status" />
          </ul>
        </div>
        <div className="hidden lg:block w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">RATING</h2>
          </div>
          <ul>
            {cars.map((car, index) => (
              <li className="p-4 h-[56px]" key={index}>
                <div className="flex gap-2">
                  {car.rating}
                  {car.rating}
                  {car.rating}
                  {car.rating}
                  {car.rating}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block w-[91px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">ACTIONS</h2>
          </div>
          <ul>
            {cars.map((car, index) => (
              <li className="p-4 h-[56px]" key={index}>
                <div className="flex justify-center">{car.actions}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
