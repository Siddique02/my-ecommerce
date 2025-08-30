'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="text-center text-gray-600">Your cart is empty</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <Image
              src={item.image}
              alt={item.name}
              width={96}
              height={96}
              className="w-24 h-24 object-cover mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1 rounded"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
}