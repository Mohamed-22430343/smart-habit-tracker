import React, { useState } from "react";

function AddHabit({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHabit = {
      name,
      history: [],
    };
    fetch("http://localhost:3001/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHabit),
    })
      .then(res => res.json())
      .then(data => onAdd(data));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="New Habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
}

export default AddHabit;
