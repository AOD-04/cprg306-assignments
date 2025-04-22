'use client';
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

function cleanItemName(name) {
  return name
    .split(',')[0]
    .replace(/[^\p{L}\p{N} ]+/gu, '')
    .trim()
    .toLowerCase();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (name) => {
    const cleaned = cleanItemName(name);
    setSelectedItemName(cleaned);
  };

  return (
    <div className="flex gap-8 p-6">
      <div className="flex-1 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList 
          items={items} 
          onItemSelect={handleItemSelect} 
        />
      </div>
      
      <div className="flex-1 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}


