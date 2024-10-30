export default function Item({ name, quantity, category }) {

    return (
      <li className="flex justify-between items-center border-b py-2 px-4">
        <span className="font-medium text-lg">{name}</span>
        <span className="text-gray-600">Quantity: {quantity} in {category}</span>
      </li>
    );
  }