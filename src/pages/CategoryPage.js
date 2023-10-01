import React, { useState, useEffect } from "react";

function CategoryPage(props) {
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const categoryId = props.match.params.categoryId;
    fetch(`http://localhost:3000/categories/${categoryId}`, {
        headers: {
          Accept: 'application/json'
        }
      })
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
  }, [props.match.params.categoryId]);

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