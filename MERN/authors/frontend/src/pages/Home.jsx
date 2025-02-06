import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const Home = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(() => setAuthors(authors.filter(author => author._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2>Favorite Authors</h2>
      <Link className="btn" to="/authors/new">Add an author</Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <Link className="edit-btn" to={`/authors/${author._id}/edit`}>Edit</Link>
                <button className="delete-btn" onClick={() => deleteAuthor(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;