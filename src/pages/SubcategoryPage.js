

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SubcategoryPage() {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categoryId}/subcategories.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSubcategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  if (subcategories.length === 0) {
    return <div>No subcategories found.</div>; // Display a message when there are no subcategories
  }

  return (
    <div>
      <h1>Subcategories</h1>
      <ul>
        {subcategories.map((subcategory) => (
          <li key={subcategory.id}>
            <Link to={`/categories/${categoryId}/subcategories/${subcategory.id}`}>
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubcategoryPage;