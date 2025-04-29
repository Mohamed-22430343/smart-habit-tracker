import React, { useEffect, useState } from "react";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";
import HabitHistory from "./components/HabitHistory";

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/habits")
      .then(res => res.json())
      .then(data => setHabits(data));
  }, []);

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map(h => (h.id === updatedHabit.id ? updatedHabit : h)));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Smart Habit Tracker</h1>
      <AddHabit onAdd={addHabit} />
      <HabitList habits={habits} onUpdate={updateHabit} />
      <HabitHistory habits={habits} />
    </div>
  );
}

export default App;
