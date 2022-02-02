import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
   
  const [ selectedCategory, SetSelectedCategory] = useState('Everything')

 // selectedCategory = 'Everything'

 function handleChange(e) {
   console.log(e.target.value)
   SetSelectedCategory(e.target.value)
 }
 const filteredItems = items.filter((item) => {
   if(item.category === selectedCategory) {
   return true;
   } else if (selectedCategory === 'Everything'){
    return true;
   }
   else {
     return false;
   }

 })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="Everything">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
