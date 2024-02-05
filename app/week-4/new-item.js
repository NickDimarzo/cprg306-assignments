"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ name, quantity, category });
    alert(`ITEM ADDED: ${name} - Quantity: ${quantity} - Category: ${category}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full flex-row border-2 rounded-lg" >
      <div className="m-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className=" w-full p-2 rounded-lg"
          placeholder="Item Name"
        />
      </div>
      <div className="m-4">
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          className=" w-full p-2 rounded-lg"
        />
      </div>
      <div className="m-4">
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
            className=" w-full p-2 rounded-lg"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="m-4 mb-6 flex justify-center">
        <button type="submit" onClick={handleSubmit} className=" bg-slate-400 px-10 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 ">
          Add
        </button>
      </div>
    </form>
  );
}
