

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SubcategoryPage() {
  const [subcategory, setSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categorySlug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categorySlug}/subcategories.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Check if the response is an array or an object with subcategories property
        const subcategories = Array.isArray(data) ? data : data.subcategories;

        if (subcategories && subcategories.length > 0) {
          setSubcategory(subcategories[0]); // Display the first subcategory
        } else {
          throw new Error("No subcategories found");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [categorySlug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!subcategory) {
    return <div>No subcategories found.</div>;
  }

  return (
    <div>
      <h1>Subcategory Details</h1>
      <div>
        <strong>ID:</strong> {subcategory.id}<br />
        <strong>Name:</strong> {subcategory.name}<br />
        <strong>Category ID:</strong> {subcategory.category_id}<br />
        {/* Include other properties as needed */}
        <strong>Slug:</strong> {subcategory.slug}<br />
      </div>
    </div>
  );
}

export default SubcategoryPage;