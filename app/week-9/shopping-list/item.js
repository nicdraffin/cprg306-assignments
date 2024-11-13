"use client"

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div>
      <li onClick={() => onSelect(name)} className="flex justify-between items-center border-b py-2 px-4 cursor-pointer">
        <span className="font-medium text-lg">{name}</span>
        <span className="text-gray-600">Quantity: {quantity} in {category}</span>
      </li>
    </div>
    
  );
}
