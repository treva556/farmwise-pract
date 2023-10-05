


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SubcategoryPage() {
  const [subcategories, setSubcategories] = useState([]);
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
        setSubcategories(data);
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

  if (subcategories.length === 0) {
    return <div>No subcategories found.</div>;
  }

  return (
    <div>
      <h1>Subcategories</h1>
      {subcategories.map((subcategory) => (
        <div key={subcategory.id}>
          <strong>ID:</strong> {subcategory.id}<br />
          <strong>Name:</strong> {subcategory.name}<br />
          <strong>Category ID:</strong> {subcategory.category_id}<br />
          <strong>Slug:</strong> {subcategory.slug}<br />
          <Link to={`/categories/${categorySlug}/subcategories/${subcategory.slug}/products`}>View Products</Link>
        </div>
      ))}
    </div>
  );
}

export default SubcategoryPage;