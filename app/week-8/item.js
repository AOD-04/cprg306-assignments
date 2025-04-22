"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div 
      className="border p-2 my-2 cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect?.(name)}
    >
      <div className="font-bold">{name}</div>
      <div className="text-sm text-gray-600">
        Buy {quantity} in {category}
      </div>
    </div>
  );
}


