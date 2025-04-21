import React from 'react';

export default function DestinationSelector({ tours, selected, onSelect }) {
  //get unique names & add "all destinations"
    const names = ['All Destinations', ...new Set(tours.map(t => t.name))];

  return (
    <div className="mb-4">
      {/*Dropdown menu for selecting destination */}
      <select
        className="p-2 border rounded"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {names.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}
