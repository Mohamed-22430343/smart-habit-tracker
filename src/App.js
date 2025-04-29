// src/App.js
import React from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';
import './App.css'; // make sure you have this line

function App() {
  return (
    <div className="container">
      <h1 className="title">smart habit tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
}

export default App;
