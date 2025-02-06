import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const CreateAuthor = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors', { name })
      .then(() => navigate('/authors'))
      .catch(err => alert(err.response.data.message));
  };

  return (
    <div className="container">
      <h2>Add a new author</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input className="input-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAuthor;