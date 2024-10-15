"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`
      Name: ${name}
      Quantity: ${quantity}
      Category: ${category}
    `);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 max-w-lg mx-auto rounded-lg shadow-md space-y-6">
      {/* Item Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-semibold mb-2">Item Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter item name"
        />
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col">
        <label className="text-lg font-semibold mb-2">Quantity:</label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-2 bg-red-500 text-white rounded-l-lg hover:bg-red-600 disabled:opacity-50"
          >
            -
          </button>
          <span className="px-4 py-2 bg-gray-100 border-t border-b">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Category Selection */}
      <div className="flex flex-col">
        <label htmlFor="category" className="text-lg font-semibold mb-2">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
        >
          Submit Item
        </button>
      </div>
    </form>
  );
}