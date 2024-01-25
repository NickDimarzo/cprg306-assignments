import Item from "./item";

export default function ItemList() {
    
        const item1 = {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
          };
           
          const item2 = {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
          };
           
          const item3 = {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
          };
           
          const item4 = {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
          };
           
          const item5 = {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
          };
           
          const item6 = {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
          };
           
          const item7 = {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
          };
           
          const item8 = {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
          };
           
          const item9 = {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
          };
           
          const item10 = {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
          };
           
          const item11 = {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
          };
           
          const item12 = {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
          };

    return(
        <div>
            <h1 className = "font-bold text-3xl m-1">Shopping List</h1>
            <ul>
                <li><Item {...item1} /></li>
                <li><Item {...item2} /></li>
                <li><Item {...item3} /></li>
                <li><Item {...item4} /></li>
                <li><Item {...item5} /></li>
                <li><Item {...item6} /></li>
                <li><Item {...item7} /></li>
                <li><Item {...item8} /></li>
                <li><Item {...item9} /></li>
                <li><Item {...item10} /></li>
                <li><Item {...item11} /></li>
                <li><Item {...item12} /></li>
            </ul>
        </div>

    );
}