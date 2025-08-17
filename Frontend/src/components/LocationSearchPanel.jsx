import React from "react";

export default function LocationSearchPanel(props) {
  const locations = [
    "24B, Near Kapoor's cafe, Bhopal",
    "22B, Near Ale-Phata cafe, Ale",
    "Near Vighnaharta Banglow, Padali",
    "House no. 34, Padali",
  ];

  return (
    <div>
      {/* This is just a sample Data */}
      {locations.map((loc, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex items-center gap-4 border-gray-100 active:border-black border-2 p-3 rounded-xl my-2 justify-start"
        >
          <h2 className="bg-[#eeee] flex items-center justify-center h-10 w-10 rounded-full ">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{loc}</h4>
        </div>
      ))}
    </div>
  );
}
