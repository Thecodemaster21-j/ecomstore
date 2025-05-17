import React from 'react';
import ProductCard from '../componets/Productcard';
import Shirt from '../assets/Shirt.png';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Shirt',
      price: 19.99,
      description: 'Comfortable cotton t-shirt',
      imageUrl: Shirt
    },
    {
      id: 2,
      name: 'Jeans',
      price: 49.99,
      description: 'Classic Brown Work pants',
      imageUrl: ('../public/Pants.webp')
    },
    {
      id: 3,
      name: 'Hoodie',
      price: 89.99,
      description: 'Stylish running shoes',
      imageUrl: ('../public/Hoodie.webp')
    },
  ];
  return (
    <div className="product-list">
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default Product;