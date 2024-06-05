
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Headphone', price: 10, image: '/product.image.jpg' },
  { id: 2, name: 'Headphone Bag', price: 20, image: '/product.image2.jpg' },
];

const ProductListing = () => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
