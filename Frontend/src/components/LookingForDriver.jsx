import React from "react";
import car from "../assets/car.webp";

export default function LookingForDriver() {
  return (
    <div>
      <h5
        onClick={() => props.setVehicleFound(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Looking for a Driver</h3>

      <div className="flex flex-col gap-2 justify-between items-center ">
        <img className="h-20" src={car} alt="" />
      </div>
      <div className=" w-full mt-5 mb-2">
        <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2">
          <i className="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600 -mt-1">
              Kankariya Talab, Ahemdabad
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 ">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹450 </h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
}
