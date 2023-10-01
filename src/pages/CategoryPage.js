import React, { useState, useEffect } from "react";

function CategoryPage(props) {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const categoryId = props.match.params.categoryId;
    fetch(`http://localhost:3000/categories/${categoryId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching category data: ", error);
      });
  }, [props.match.params.categoryId]);

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