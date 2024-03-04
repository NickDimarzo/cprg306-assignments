"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({items, onDelete}) {
  //state to keep track of the sortBy value
  const [sortBy, setSortBy] = useState("name");

  //function to sort items by sortBy
  items.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });

  //array of unique categories
  const categories = items.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  //function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //function to decide how to format the list of items by sortBy
  function listDivide() {
    if (sortBy === "name" || sortBy === "category") {
      return items.map((item) => (
        <li key={item.id}>
          <Item {...item} onDelete={onDelete} />
        </li>
      ));
    } else {
      return categories.map((category) => (
        <li key={category}>
          <h2 className="font-bold text-2xl m-1">
            {capitalizeFirstLetter(category)}
          </h2>
          {items
            .filter((item) => item.category === category)
            .map((item) => (
              <Item key={item.id} {...item} onDelete={onDelete} />
            ))}
        </li>
      ));
    }
  }

  return (
    <div className="p-2 m-4 bg-slate-900 w-full flex-row border-2 rounded-lg ">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl m-1">Shopping List</h1>
      </div>
      <div className="flex">
        <button
          onClick={() => setSortBy("name")}
          className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full"
        >
          Sort by Category
        </button>
      </div>
      <div className="flex">
        <button
          onClick={() => setSortBy("grouped")}
          className="bg-slate-400 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 w-full m-1 font-bold"
        >
          Group Categories
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        <ul>{listDivide()}</ul>
      </div>
    </div>
  );
}
