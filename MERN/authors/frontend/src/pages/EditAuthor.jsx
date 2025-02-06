import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

const EditAuthor = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => setName(res.data.name))
      .catch(() => setError("We're sorry, but we could not find the author you are looking for."));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}`, { name })
      .then(() => navigate('/authors'))
      .catch(err => setError(err.response.data.message));
  };

  return (
    <div className="container">
      <h2>Edit Author</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label">Name:</label>
        <input className="input-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="button-group">
          <button className="btn" type="submit">Save</button>
          <button className="cancel-btn" type="button" onClick={() => navigate('/authors')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthor;
