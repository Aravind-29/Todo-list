import React, { useState } from "react";

export const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> Add your new task here !  </h3>

      <input
        type="textbox"
        placeholder="add list"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};