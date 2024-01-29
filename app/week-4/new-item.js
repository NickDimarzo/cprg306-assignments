"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");   
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("Produce");

    function handleSubmit(event) {
        event.preventDefault();
        console.log({name, quantity, category});
        alert(`Added item:${name}, quantity:${quantity}, category:${category}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Quantity:
                <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
            </label>
            <label>
                Category:
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
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
            </label>
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
    )
}