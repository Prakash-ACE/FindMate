import React from 'react';

function ItemCard({ item }) {
  const iconMap = {
    electronics: '💻',
    documents: '📄',
    clothing: '👕',
    accessories: '🧢',
    other: '📦'
  };
  return (
    <div className="card">
      <p>{iconMap[item.category] || '📍'} <strong>{item.title}</strong> ({item.status})</p>
      <p>{item.description}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Date:</strong> {item.date}</p>
    </div>
  );
}

export default ItemCard;