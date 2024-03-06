"use client";

import NavBar from "../nav/nav-bar";
import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  const [itemList, setItems] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (id) => {
    let name = itemList.find((item) => item.id === id).name;
    let cleanedName = name.split(",")[0];
    cleanedName = cleanedName.replace(/[^a-z0-9\s,]/gi, "").trim();
    console.log(cleanedName);
    setSelectedItemName(cleanedName);
  };

  const addItem = (item) => {
    setItems([...itemList, item]);
  };

  const deleteItem = (id) => {
    setItems(itemList.filter((item) => item.id !== id));
    alert(`ITEM DELETED: ${itemList.find((item) => item.id === id).name}`);
  };

  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main className="flex w-full">
        <div>
          <NewItem onAddItem={addItem} />
          <ItemList
            items={itemList}
            onDelete={deleteItem}
            onSelect={handleItemSelect}
          />
        </div>
        <div className="">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    </body>
  );
}
