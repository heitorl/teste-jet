import { ListCarProps } from "../_interfaces/carProps";

const ListCarInfo = ({ cars, displayType }: ListCarProps) => {
  return (
    <>
      {cars.map((car, index) => (
        <li className="p-4 h-[56px] flex items-center" key={index}>
          <p
            className={`text-sm text-gray-900 ${
              displayType === "status"
                ? "rounded-md py-1 px-3 bg-green-100 w-[72px] text-xs text-center text-green-800 font-semibold"
                : displayType === "next_reservation"
                ? "text-gray-500"
                : "font-bold"
            }`}
          >
            {displayType !== undefined ? car[displayType] : ""}
          </p>
        </li>
      ))}
    </>
  );
};

export default ListCarInfo;
