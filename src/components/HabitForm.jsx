import React, { useState } from 'react';

const HabitForm = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter a habit"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;