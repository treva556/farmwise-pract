

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { categorySlug, subcategorySlug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${categorySlug}/subcategories/${subcategorySlug}/products.json`)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Log the entire API response
        if (data && data.length > 0) {
          console.log('Product Name:', data[0].name); // Log product name
          console.log('Product Description:', data[0].description); // Log product description
          console.log('Product Price:', data[0].price); // Log product price
          setProduct(data[0]); // Update the product state with fetched data
        }
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [categorySlug, subcategorySlug]);

  if (!product) {
    return <div>Loading...</div>;


  }

  console.log(product); // Add this line


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