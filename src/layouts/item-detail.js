// https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/Products.js:27-111

import React, { useEffect } from 'react';
import {useParams} from "react-router-dom"
import productsData from "../js/item-data";

function ItemDetails() {

  const {productId} = useParams()
  console.log(productId)
  const thisProduct = productsData.find(prod => prod.id === productId)

  return (
      <div>
          <h1>{thisProduct.name}</h1>
          <p>Price: ${thisProduct.price}</p>
          <p>{thisProduct.description}</p>
      </div>
  )
}

export default ItemDetails;
