import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Lost something on campus?</h1>
      <p className="mb-6 text-gray-600">Reunite with your lost items today.</p>
      <div className="flex justify-center gap-4">
        <Link to="/Report" className="bg-blue-600 text-white px-4 py-2 rounded">Report Item</Link>
        <Link to="/Browse" className="bg-gray-100 text-blue-600 px-4 py-2 rounded">Browse Items</Link>
      </div>
    </div>
  );
}

export default Home;