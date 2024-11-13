"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from "react";
import MealIdeas from './meal-ideas';

export default function Page() {

  const {user} = useUserAuth();

  const [items, setItems] = useState(itemsData);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .replace(
        /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u2011-\u26FF|\uD83E[\uDD10-\uDDFF]/g,
        ""
      )
      .split(",")[0]
      .trim();
  
    setSelectedItem(cleanedName);
  };

  return (
    <main>
    { user ? (
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Shopping List App</h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="flex flex-row items-start w-full justify-center">
        <ItemList items={items} onItemSelect={handleItemSelect} />
          <div className="ml-8">
            {selectedItem ? (
              <MealIdeas ingredient={selectedItem} />
            ) : (
              <h2>Please Select an Ingredient to See Meal Ideas</h2>
            )}
          </div>
        </div>
      </div> ) : (
        <div>
          <p>You must be logged in to view this page.</p>
          <Link href="/week-9/">Click here to return to the Sign In page</Link>
        </div>
      ) }
    </main>
    
  );
  
}
