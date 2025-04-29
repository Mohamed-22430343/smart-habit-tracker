import React from "react";

function HabitList({ habits, onUpdate }) {
  const today = new Date().toISOString().split("T")[0];

  const toggleHabit = (habit) => {
    const updatedHistory = habit.history.includes(today)
      ? habit.history.filter(date => date !== today)
      : [...habit.history, today];

    const updatedHabit = { ...habit, history: updatedHistory };

    fetch(`http://localhost:3001/habits/${habit.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    })
      .then(res => res.json())
      .then(data => onUpdate(data));
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Today's Habits</h2>
      {habits.map(habit => (
        <div key={habit.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={habit.history.includes(today)}
            onChange={() => toggleHabit(habit)}
            className="mr-2"
          />
          <span>{habit.name}</span>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
