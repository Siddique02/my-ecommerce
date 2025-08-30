import ProductCard from '../app/components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Smartphone X',
    description: 'High-end smartphone with advanced camera and long battery life. Perfect for photography enthusiasts and power users.',
    price: 999.99,
    image: '/phone.jpg'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with crystal clear sound and comfortable fit for all-day use.',
    price: 249.99,
    image: '/headphones.jpg'
  },
  {
    id: 3,
    name: 'Laptop Pro',
    description: 'Powerful laptop with high-resolution display, fast processor, and ample storage for professionals and gamers.',
    price: 1499.99,
    image: '/laptop.jpg'
  },
  {
    id: 4,
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with heart rate monitor, GPS, and customizable faces.',
    price: 199.99,
    image: '/watch.jpg'
  },
  {
    id: 5,
    name: 'Portable Charger',
    description: 'High-capacity power bank with fast charging capabilities for multiple devices on the go.',
    price: 49.99,
    image: '/charger.jpg'
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}