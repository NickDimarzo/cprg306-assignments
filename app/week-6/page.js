"use client";

import NavBar from "../nav/nav-bar";
import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import { useState } from "react";

export default function Page() {
  const [itemList, setItems] = useState(items);

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
          <ItemList items={itemList} onDelete={deleteItem} />
        </div>
        <div>
          <NewItem onAddItem={addItem} />
        </div>
      </main>
    </body>
  );
}
