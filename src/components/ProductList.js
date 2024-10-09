// src/components/ProductList.js

import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Pan de Campo', price: 1500, image: require('../imagenes/pan1.jpeg') },
  { id: 2, name: 'Cuerno', price: 2000, image: require('../imagenes/pan2.jpeg') },
  { id: 3, name: 'Tarta de frutas', price: 2500, image: require('../imagenes/pan3.jpeg') },
  { id: 4, name: 'Pan Integral', price: 1800, image: require('../imagenes/pan4.jpeg') },
  { id: 5, name: 'Baguette', price: 2200, image: require('../imagenes/pan5.jpeg') },
  { id: 6, name: 'Donas', price: 3000, image: require('../imagenes/pan6.jpeg') },
  { id: 7, name: 'Pan de Ajo', price: 1600, image: require('../imagenes/p7.jpeg') },
  { id: 8, name: 'Bizcochos', price: 1200, image: require('../imagenes/p8.jpeg') },
  { id: 9, name: 'Pan de Leche', price: 1700, image: require('../imagenes/p9.jpeg') },
  { id: 10, name: 'Panes de Queso', price: 2000, image: require('../imagenes/p10.jpeg') },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Productos Disponibles</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
