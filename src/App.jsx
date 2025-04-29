import React, { useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import './index.css';

const App = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (text) => {
    setHabits([...habits, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div className="container">
      <h1>smart habit tracker</h1>
      <HabitForm onAdd={addHabit} />
      <HabitList habits={habits} onComplete={toggleComplete} onDelete={deleteHabit} />
    </div>
  );
};

export default App;