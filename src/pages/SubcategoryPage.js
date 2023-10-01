import React, { useState, useEffect } from "react";

function SubcategoryPage(props) {
  const [subcategory, setSubcategory] = useState(null);

  useEffect(() => {
    const subcategoryId = props.match.params.subcategoryId;
    fetch(`http://localhost:3000/subcategories/${subcategoryId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setSubcategory(data);
      })
      .catch((error) => {
        console.error("Error fetching subcategory data: ", error);
      });
  }, [props.match.params.subcategoryId]);

  if (!subcategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{subcategory.name}</h1>
      {/* Render other subcategory details */}
    </div>
  );
}

export default SubcategoryPage;