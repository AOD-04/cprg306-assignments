"use client";

import { useState } from "react";


export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    onAddItem(item);
    setName('');
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="max-w-md mx-auto bg-black p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <div className="flex items-center space-x-4">
            <button 
              onClick={decrement} 
              type="button"
              disabled={quantity === 1}
              className={`px-3 py-1 rounded ${quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            >
              -
            </button>
            <span className="text-xl font-bold">{quantity}</span>
            <button 
              onClick={increment} 
              type="button"
              disabled={quantity === 20}
              className={`px-3 py-1 rounded ${quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 text-black"
          >
            {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600">
          Add Item
        </button>
      </form>
    </div>
  );
}
