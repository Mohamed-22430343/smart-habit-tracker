// src/components/HabitList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HabitList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/habits')
      .then((res) => setHabits(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleComplete = async (id) => {
    try {
      const habit = habits.find(h => h.id === id);
      const updated = { ...habit, completed: !habit.completed };
      await axios.patch(`http://localhost:3001/habits/${id}`, updated);
      setHabits(habits.map(h => h.id === id ? updated : h));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/habits/${id}`);
      setHabits(habits.filter(h => h.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {habits.map((habit) => (
        <div className="habit-item" key={habit.id}>
          <span className="habit-name">{habit.name}</span>
          <div>
            <button
              className="complete-button"
              onClick={() => handleComplete(habit.id)}
            >
              Complete
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(habit.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
