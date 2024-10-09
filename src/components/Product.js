import React from 'react';

function Product({ name, price }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
    </div>
  );
}

export default Product;
