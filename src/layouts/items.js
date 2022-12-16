
// https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/Products.js:27-111

import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import productsData from "../js/item-data";


function Items() {
  const products = productsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/items/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
}

export default Items;