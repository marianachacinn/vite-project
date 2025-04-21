import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import DestinationSelector from './DestinationSelector';

const API_URL = 'https://course-api.com/react-tours-project';

export default function App() {
  //stateing variables
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState('All Destinations');
// fetch tour data from API
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tours.');
    }
    setLoading(false);
  };
// fetch tours on initial render
  useEffect(() => {
    fetchTours();
  }, []);
// removes a tour from the list
  const handleRemove = (id) => {
    setTours(prev => prev.filter(tour => tour.id !== id));
  };
// update selected tour destination
  const handleSelect = (value) => {
    setSelected(value);
  };
  //filter tours based on selected destination
  const filteredTours = selected === 'All Destinations'
    ? tours
    : tours.filter(tour => tour.name === selected);

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🌍 Tour Destination Selector</h1>
      {/*dropdown to select destination*/}
      <DestinationSelector tours={tours} selected={selected} onSelect={handleSelect} />
      {/*gallery to show filtered tours*/}
      <Gallery 
        tours={filteredTours} 
        loading={loading} 
        error={error} 
        onRemove={handleRemove} 
        onRefresh={fetchTours}
      />
    </main>
  );
}