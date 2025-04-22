"use client";

import Item from './item'; 
import { useState } from 'react';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <div className="max-w-md ">
            <div className="mb-4 flex space-x-4">
                <p className="marginbottom-2">Sort by:</p>
                <button onClick={() => setSortBy('name')} className="px-4 py-2 bg-blue-500 text-white rounded">Sort by Name</button>
                <button onClick={() => setSortBy('category')} className="px-4 py-2 bg-blue-500 text-white rounded">Sort by Category</button>
            </div>
            <ul className="space-y-4">
                {sortedItems.map((item, index) => (
                    <li key={index} className="p-4 border border-gray-300 rounded shadow">
                        <Item name={item.name} quantity={item.quantity} category={item.category} />
                    </li>
                ))}
            </ul>
        </div>
    );
}