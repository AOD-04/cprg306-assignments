"use client";

import Item from './item';
import { useState, useEffect } from 'react';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const sorted = [...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
    });
    setSortedItems(sorted);
  }, [items, sortBy]);

  return (
    <div className="max-w-md mt-6">
      <div className="mb-4 flex space-x-4">
        <p className="font-medium">Sort by:</p>
        <button
          onClick={() => setSortBy("name")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded shadow">
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

