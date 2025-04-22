"use client";

export default function Item({ name, quantity, category }) {
  return (
    <div className="border p-2 rounded">
      <p className="font-bold">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}


