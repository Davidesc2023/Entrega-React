// src/components/ProductCard.js

import React from 'react';
import './ProductCard.css'; // Importa el CSS para estilos

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button className="buy-button">Comprar</button>
    </div>
  );
};

export default ProductCard;
