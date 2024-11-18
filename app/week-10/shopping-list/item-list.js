"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  };

  const groupedItems = groupByCategory(sortedItems);

  return (
    <div className="flex flex-col items-center pt-3">
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mx-2 border text-black ${sortBy === 'name' ? 'bg-blue-500 text-black' : 'bg-white'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 mx-2 border text-black ${sortBy === 'category' ? 'bg-blue-500 text-black' : 'bg-white'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 mx-2 border text-black ${sortBy === 'group' ? 'bg-blue-500 text-black' : 'bg-white'}`}
        >
          Group by Category
        </button>
      </div>

      {Object.keys(groupedItems).map(category => (
        <div key={category} className="w-full max-w-md mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <ul className="ml-6 space-y-1">
            {groupedItems[category].map(item => (
              <li key={item.id}>
                <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={onItemSelect} 
              />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
