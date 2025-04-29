// src/App.js
import React from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

function App() {
  return (
    <div>
      <h1>Smart Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
}

export default App;
