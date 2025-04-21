import React from 'react';
import TourCard from './TourCard';

export default function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  if (loading) return <p>Loading tours...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (tours.length === 0) return (
    <div>
      <p>No tours left. Refresh to reload.</p>
      <button 
        className="mt-2 p-2 bg-blue-500 text-white rounded" 
        onClick={onRefresh}>
        Refresh
      </button>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}
