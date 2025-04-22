"use client"
import {useState} from 'react';
import ItemList from './item-list';
import NewItem from "./new-item";
import itemsData from "./items.json"

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
  });

  return (
    <main className="p-4">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={sortedItems} onSortChange={setSortBy} />
    </main>
  );
}