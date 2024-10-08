"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20) {
          setQuantity(prevQuantity => prevQuantity + 1);
        }
      };
    
      const decrement = () => {
        if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        let currentQuantity = quantity;
        
        alert(`
            Current Quantity: ${currentQuantity}
        `);

        setQuantity(1);
    }

  return (
    <form>
        <div>
            <label className="inline-block w-40">Add Quantity:</label>
            <button type="button" onClick={increment} disabled={quantity === 20} className="m-2 px-2 py-2 bg-black rounded text-green-500 hover:bg-green-200 active:bg-green-800 align-middle inline-block justify-center">+</button>
        </div>
        <div>
            <label className="inline-block w-40">Minus Quantity:</label>
            <button type="button" onClick={decrement} disabled={quantity === 1} className="m-2 px-2 py-2 bg-black rounded text-red-500 hover:bg-red-200 active:bg-red-800 align-middle inline-block justify-center">-</button>
        </div>
        <div>
            <span className="m-1 px-3 inline-block text-blue-800 align-middle bg-slate-400">{quantity}</span>
        </div>
        <div>
            <button type="submit" onClick={handleSubmit} className="m-2 px-6 py2 inline-block align-middle text-black bg-white rounded">Submit Quantity</button>
        </div>

    </form>
  )
}