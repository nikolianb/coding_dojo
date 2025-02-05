import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setPrice(response.data.price);
        setDescription(response.data.description);
      })
      .catch(() => navigate("/products"));
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/products/${id}`, {
      title,
      price,
      description,
    })
    .then(() => navigate(`/products/${id}`))
    .catch((err) => console.log("Update Error:", err));
  };

  return (
    <div className="edit-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <label>Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <label>Description:</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
