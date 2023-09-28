import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../images/pic1.png"; // Adjust the path



function EquipandServices() {
  return (
    <div>
      <h1>Farm Equipment and Services</h1>
      <Link to="/equip&services/services">
        <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
          <img
            src={pic1}
            alt="Services"
            className="mx-auto h-64 w-64 object-contain"
          />
          <h1 className="text-center font-bold md:text-base mt-2">Services</h1>
        </div>
      </Link>
      <Link to="/equip&services/farmequipment">
        <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
          <img
            src={pic1}
            alt="Farm Equipment"
            className="mx-auto h-64 w-64 object-contain"
          />
          <h1 className="text-center font-bold md:text-base mt-2">Farm Equipment</h1>
        </div>
      </Link>
      <Link to="/equip&services/animalequipment">
        <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
          <img
            src={pic1}
            alt="Animal Equipment"
            className="mx-auto h-64 w-64 object-contain"
          />
          <h1 className="text-center font-bold md:text-base mt-2">Animal Equipment</h1>
        </div>
      </Link>
       Add more links for other categories
    </div> 
  );
}

export default EquipandServices;