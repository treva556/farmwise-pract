

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
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
                <Link to={`/categories/${category.id}/subcategories/:subcategoryId`}>{category.name}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;

