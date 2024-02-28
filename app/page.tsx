export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex shadow-xl rounded-lg">
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">CAR</h2>
          </div>
        </div>
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">
              NEXT RESERVATION
            </h2>
          </div>
        </div>
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">STATUS</h2>
          </div>
        </div>
        <div className="w-[287px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">RATING</h2>
          </div>
        </div>
        <div className="w-[91px] h-[380px]">
          <div className="p-4 bg-gray-50">
            <h2 className="text-gray-500 font-semibold text-xs">ACTIONS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
