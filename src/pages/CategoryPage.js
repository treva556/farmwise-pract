

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  console.log (categories)

  return (
    <div>
      <h1>Categories</h1>
      <ul className=" bg-yellow-300">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug}/subcategories`}>{category.name}</Link>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default CategoryPage;

