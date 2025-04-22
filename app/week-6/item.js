export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-3 rounded-md shadow-sm mb-2 bg-black">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Quantity:</span> {quantity}</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
      </li>
    );
  }


