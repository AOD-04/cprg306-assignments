"use client";
import Item from './item';
import { useState, useEffect } from 'react';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const sorted = [...items].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });
    setSortedItems(sorted);
  }, [items, sortBy]);

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 ${sortBy === "name" ? "bg-blue-500 text-white" : ""}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`${sortBy === "category" ? "bg-blue-500 text-white" : ""}`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul className="list-none p-0">
        {sortedItems.map(item => (
          <li 
            key={item.id}
            className="my-2"
          >
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
