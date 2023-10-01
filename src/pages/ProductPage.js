import React, { useState, useEffect } from "react";

function ProductPage(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = props.match.params.productId;
    fetch(`http://localhost:3000/products/${productId}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product data: ", error);
      });
  }, [props.match.params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      {/* Render other product details */}
    </div>
  );
}

export default ProductPage;