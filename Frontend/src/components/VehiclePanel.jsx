import car from "../assets/car.webp";
import auto from "../assets/auto.webp";
import motor from "../assets/motor.webp";

export default function VehiclePanel(props) {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>

      <div
        onClick={() => props.setConfirmRidePanel(true)}
        className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <img className="h-10 " src={car} alt="" />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>

      <div
        onClick={() => props.setConfirmRidePanel(true)}
        className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <img className="h-10 " src={auto} alt="" />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.68</h2>
      </div>

      <div
        onClick={() => props.setConfirmRidePanel(true)}
        className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <img className="h-10 " src={motor} alt="" />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberMoto
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, motor rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65</h2>
      </div>
    </div>
  );
}
