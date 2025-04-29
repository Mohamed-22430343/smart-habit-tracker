import React from "react";

function HabitHistory({ habits }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">History</h2>
      {habits.map(habit => (
        <div key={habit.id} className="mb-2">
          <h3 className="font-medium">{habit.name}</h3>
          <div className="text-sm text-gray-600">
            {habit.history.join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitHistory;
