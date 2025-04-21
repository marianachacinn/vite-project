import React from 'react';
import TourCard from './TourCard';

export default function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  //show loading message
  if (loading) return <p>Loading tours...</p>;
  //show error message
  if (error) return <p className="text-red-500">{error}</p>;
  //show message if no tours left
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
// render each tour using TourCard
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}
