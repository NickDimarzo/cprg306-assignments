"use client";
import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newId = generateId(18);
    const newitem = {id: newId, name, quantity, category};
    onAddItem(newitem);
    alert(
      `ITEM ADDED: ${name} - Quantity: ${quantity} - Category: ${category}`
    );
  }

  function generateId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black w-full flex-row border-2 rounded-lg"
    >
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl m-1 text-white">Add Item</h1>
      </div>
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
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="m-4 mb-6 flex justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full"
        >
          Add
        </button>
      </div>
    </form>
  );
}
