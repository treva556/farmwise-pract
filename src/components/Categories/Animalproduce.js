import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../images/pic1.png"; // Adjust the path

function Animalproduce() {
  return (
    <div className="bg-yellow-300 flex flex-wrap justify-center p-4">
     
      <div className="w-72 p-4 m-2 bg-white shadow-md rounded-md text-center">
        <Link to="/animalproduce/fish">
          <img
            src={pic1}
            alt="Fish"
            className="mx-auto h-32 w-32 object-contain"
          />
          <h1 className="text-center font-bold text-base mt-2">Livestock products</h1>
        </Link>
      </div>
      
      <div className="w-72 p-4 m-2 bg-white shadow-md rounded-md text-center">
        <Link to="/animalproduce/poultry">
          <img
            src={pic1}
            alt="Poultry"
            className="mx-auto h-32 w-32 object-contain"
          />
          <h1 className="text-center font-bold text-base mt-2">Fish</h1>
        </Link>
      </div>
      <div className="w-72 p-4 m-2 bg-white shadow-md rounded-md text-center">
        <Link to="/animalproduce/poultry">
          <img
            src={pic1}
            alt="Poultry"
            className="mx-auto h-32 w-32 object-contain"
          />
          <h1 className="text-center font-bold text-base mt-2">Poultry and Eggs</h1>
        </Link>
      </div>
      <div className="w-72 p-4 m-2 bg-white shadow-md rounded-md text-center">
        <Link to="/animalproduce/poultry">
          <img
            src={pic1}
            alt="Poultry"
            className="mx-auto h-32 w-32 object-contain"
          />
          <h1 className="text-center font-bold text-base mt-2">Bees and Honey</h1>
        </Link>
      </div>
      <div className="w-72 p-4 m-2 bg-white shadow-md rounded-md text-center">
        <Link to="/animalproduce/poultry">
          <img
            src={pic1}
            alt="Poultry"
            className="mx-auto h-32 w-32 object-contain"
          />
          <h1 className="text-center font-bold text-base mt-2">Pets and Feeds</h1>
        </Link>
      </div>
      {/* Add more cards here */}
    </div>
  );
}

export default Animalproduce;