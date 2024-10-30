"use client"

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import React, { useState } from "react";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <main>
        <h1 className='flex text-4xl py-6 justify-center'>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
    </main>
  );
}