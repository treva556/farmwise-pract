import React, { useState, useEffect } from "react";

function CategoryPage(props) {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const categoryId = props.match.params.categoryId;

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/categories/${categoryId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCategory(data);
      })
      .catch(error => {
        console.error('Error fetching category data:', error);
        setError(error.message);
      });
  }, [categoryId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      {/* Render other category details */}
    </div>
  );
}

export default CategoryPage;