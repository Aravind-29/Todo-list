import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "completed")
  sortedItems = items.filter(item => item.packed);

  else if (sortBy === "notcompleted")
  sortedItems = items.filter(item => !item.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Filter your list</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </select>

        <button onClick={onClearList}> Clear list </button>
      </div>
    </div>
  );
};

export default PackingList;