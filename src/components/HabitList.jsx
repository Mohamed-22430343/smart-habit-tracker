import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HabitList() {
  const [habits, setHabits] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    axios.get('http://localhost:3001/habits') // Replace with your backend API endpoint
      .then(response => {
        setHabits(response.data); // Set state with fetched habits
      })
      .catch(error => {
        console.error('There was an error fetching the habits!', error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map(habit => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;
