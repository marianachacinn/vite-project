import React from 'react';

export default function TourCard({ tour, onRemove }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="border rounded shadow p-4">
      {/*tour image */}
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <div className="mt-2">
        {/*tour name & info */}
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-700">{info.substring(0, 100)}...</p>
        {/*tour price */}
        <p className="text-lg font-bold mt-1">${price}</p>
        {/*button to remove tour */}
        <button 
          onClick={() => onRemove(id)}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
