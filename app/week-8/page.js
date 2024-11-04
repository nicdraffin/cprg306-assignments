"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from "react";
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, { id: prevItems.length + 1, ...newItem }]);
  };

  const handleItemSelect = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Shopping List App</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      {selectedItem && <MealIdeas ingredient={selectedItem} />}
    </div>
  );
}
