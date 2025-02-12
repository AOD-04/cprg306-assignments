//heavily helped by ChatGPT, also not sure if I shold've added a counter
'use client';
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md w-64 mx-auto text-center">
      <h2 className="text-lg font-semibold mb-3">Select Quantity</h2>
      
      <div className="flex items-center justify-center space-x-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1}
          className={`px-3 py-1 rounded ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          -
        </button>

        <span className="text-xl font-bold">{quantity}</span>

        <button 
          onClick={increment} 
          disabled={quantity === 20}
          className={`px-3 py-1 rounded ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
