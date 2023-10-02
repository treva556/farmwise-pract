
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../images/pic1.png";
import Animalproduce from "./Categories/Animalproduce";
import EquipandServices from "./Categories/Faequi&services";

function Bodyy() {
  return (
    <>
      {/* Other components */}
      
      <div className="mt-8 bg-yellow-200">
        <h1 className=" text-xl underline">Animal Produce</h1>
        <div className="flex">
        <Link to="/categories/animal-produce"> {/* Corrected route */}
  <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
    <img
      src={pic1}
      alt="Animal Produce"
      className="mx-auto h-64 w-64 object-contain"
    />
    <h1 className="text-center font-bold md:text-base mt-2">Animal Produce</h1>
  </div>
</Link>
          Includes Meat and Live animals: Fish, Poultry(Chicken and ducks), Goats, pigs, cows, sheep, Honey
        </div>
      </div>



      <div className="mt-8 bg-yellow-200">
        <h1 className=" text-xl underline">Farm Equipment ans services</h1>
        <div className="flex">
          <Link to="/equip&sevices">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt={EquipandServices}
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Cereals</h1>
            </div>
          </Link>
          Includes Meat and Live animals: Fish, Poultry(Chicken and ducks), Goats, pigs, cows, sheep, Honey 
          
        </div> 
      </div>
   
    </>
  );
}

export default Bodyy;