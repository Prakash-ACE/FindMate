import React, { useState } from 'react';
import axios from 'axios';

function Report() {
  const [form, setForm] = useState({
    title: '', description: '', status: 'lost', category: '', location: '', date: '', email: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/items', form)
      .then(() => alert('Item reported successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold">Report Lost/Found Item</h1>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="w-full border p-2 rounded" />
      <textarea name="description" placeholder="Description" onChange={handleChange} required className="w-full border p-2 rounded" />
      <select name="status" onChange={handleChange} className="w-full border p-2 rounded">
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>
      <input type="text" name="category" placeholder="Category" onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="date" name="date" onChange={handleChange} required className="w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}

export default Report;