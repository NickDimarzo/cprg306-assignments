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

  function handleItemSelect(item) { 
    const name = item.name.split(",")[0].trim(); 
    const cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, ''); 
    setSelectedItemName(cleanedName); 
  }

  const addItem = (item) => {
    setItems([...itemList, item]);
  }

  const deleteItem = (id) => {  
    setItems(itemList.filter((item) => item.id !== id));
    alert( `ITEM DELETED: ${itemList.find((item) => item.id === id).name}`);
  }


  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main className="flex w-full">
        <div>
          <ItemList items={itemList} onDelete={deleteItem} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <NewItem onAddItem={addItem} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName}/>
        </div>
      </main>
    </body>
  );
}
