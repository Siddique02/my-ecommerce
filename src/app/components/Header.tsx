'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyEcommerce
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className="flex items-center hover:underline">
                Cart ({itemCount})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}