"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

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

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="">
      <div className=" bg-slate-900 flex justify-between ">
      <div>
        <h1 className="text-3xl font-bold p-2 m-4 bg-slate-900 text-white">
          Shopping List Week 8
        </h1>
      </div>
        <button
          onClick={firebaseSignOut}
          className="bg-slate-400  p-2 m-4 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500  font-bold max-w-sm"
        >
          Sign Out
        </button>
      </div>
      <div className="p-2 m-4 flex justify-center">
        {user ? (
          <div className="flex w-full">
            <div>
              <NewItem onAddItem={addItem} />
            </div>
            <div>
              <ItemList
                items={itemList}
                onDelete={deleteItem}
                onSelect={handleItemSelect}
              />
            </div>
            <div className="">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        ) : (
          <div className="max-w-sm p-2 m-4 bg-slate-900 w-full border-2 rounded-lg text-white font-bold text-3xl flex-col justify-center">
            <div className="flex justify-center py-4">
              <h1>Week 8</h1>
            </div>
            <div className="flex justify-center py-4">
              <p>Please sign in</p>
            </div>
            <div className="flex justify-center pt-4">
              <button
                onClick={gitHubSignIn}
                className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full"
              >
                Sign In with GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
