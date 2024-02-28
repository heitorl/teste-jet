import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";

interface Car {
  name: string;
  imgUrl: string;
  next_reservation: string;
  status: string;
  rating: React.ReactNode;
  actions: React.ReactNode;
}

export default function Home() {
  const cars: Car[] = [
    {
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
      name: "Mini Cooper 2020",
      imgUrl:
        "https://utfs.io/f/2c9fc365-71ae-4023-9459-7c387206b4ca-ejj4bi.jpeg",
      next_reservation: "11/07",
      status: "Available",
      rating: <FaStar />,
      actions: <LuMoreVertical />,
    },
    {
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
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">CAR</h2>
          </div>
          <ul>
            {cars.map((car, index) => (
              <li className="px-4 py-1 flex gap-2 items-center" key={index}>
                <div className="relative h-[46px] w-[48px]">
                  <Image
                    className="rounded-lg"
                    src={car.imgUrl}
                    alt={car.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-sm text-gray-900">{car.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">
              NEXT RESERVATION
            </h2>
          </div>
          <ul>
            {cars.map((car, index) => (
              <li className="p-4" key={index}>
                <p className="test-sm text-gray-500">{car.next_reservation}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">STATUS</h2>
          </div>
          <ul>
            {cars.map((car, index) => (
              <li className="p-4 h-[56px] flex items-center" key={index}>
                <p className="rounded-md py-1 px-3 bg-green-100 w-[72px] text-xs text-center text-green-800 font-semibold">
                  {car.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[287px] h-[380px]">
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
        <div className="w-[91px] h-[380px]">
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
