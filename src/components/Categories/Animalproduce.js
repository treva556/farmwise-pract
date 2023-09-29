import React from "react";
import { Link, useParams } from "react-router-dom";
import pic1 from "../../images/pic1.png"; // Adjust the path

function Animalproduce() {
  const { category, subcategory } = useParams();

  // Define your subcategories here (you can fetch this data from an API)
  const subcategories = {
    livestock: ["poultry", "eggs", "feeds"],
    poultry: ["guineafowl", "chicken"],
    eggs: ["chicken"],
    feeds: ["ducks", "peacock"],
  };

  const renderSubcategories = () => {
    if (subcategory) {
      // Render products for the specific subcategory
      return <div>{/* Render products for the subcategory */}</div>;
    } else if (category && subcategories[category]) {
      // Render subcategories for the selected category
      return (
        <div className="flex flex-wrap justify-center">
          {subcategories[category].map((sub) => (
            <div key={sub} className="w-72 p-4 m-2 bg-white shadow-md rounded-md text-center">
              <Link to={`/animalproduce/${category}/${sub}`}>
                <h1 className="text-center font-bold text-base mt-2">{sub.charAt(0).toUpperCase() + sub.slice(1)}</h1>
              </Link>
            </div>
          ))}
        </div>
      );
    } else {
      // Render main categories
      return (
        <div className="bg-yellow-300 flex flex-wrap justify-center p-4">
          {/* Render main categories here */}
        </div>
      );
    }
  };

  return <div>{renderSubcategories()}</div>;
}

export default Animalproduce;