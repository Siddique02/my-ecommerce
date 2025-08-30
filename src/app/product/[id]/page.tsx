'use client';

import Image from 'next/image';
import React from 'react';
import { useCart } from '@/app/context/CartContext';
import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: 'Smartphone X',
    description: 'High-end smartphone with advanced camera and long battery life. Perfect for photography enthusiasts and power users.',
    price: 999.99,
    image: '/phone.jpg',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with crystal clear sound and comfortable fit for all-day use.',
    price: 249.99,
    image: '/headphones.jpg',
  },
  {
    id: 3,
    name: 'Laptop Pro',
    description: 'Powerful laptop with high-resolution display, fast processor, and ample storage for professionals and gamers.',
    price: 1499.99,
    image: '/laptop.jpg',
  },
  {
    id: 4,
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with heart rate monitor, GPS, and customizable faces.',
    price: 199.99,
    image: '/watch.jpg',
  },
  {
    id: 5,
    name: 'Portable Charger',
    description: 'High-capacity power bank with fast charging capabilities for multiple devices on the go.',
    price: 49.99,
    image: '/charger.jpg',
  },
];

export default function ProductDetail() {
  const params = useParams();
  const id: any = params.id;
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div className="text-center text-red-600">Product not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full md:w-1/2 h-96 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-2xl mb-6">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}