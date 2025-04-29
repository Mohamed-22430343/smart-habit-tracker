import React, { useState } from 'react';
import axios from 'axios';

function HabitForm() {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = {
      name: habitName,
      history: []
    };

    axios.post('http://localhost:3001/habits', newHabit) // Send POST request to your backend
      .then(response => {
        console.log('Habit added:', response.data);
        // You can update the state here or re-fetch habits after adding one
      })
      .catch(error => {
        console.error('There was an error adding the habit!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Habit Name:
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
      </label>
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
