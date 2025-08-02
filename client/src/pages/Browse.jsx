import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

function Browse() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Browse Items</h1>
      <div className="space-y-4">
        {items.map(item => <ItemCard key={item._id} item={item} />)}
      </div>
    </div>
  );
}

export default Browse;