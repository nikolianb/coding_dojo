import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Ensure useNavigate is imported and used correctly

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !price || !description) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(price) || parseFloat(price) <= 0) {
      setError("Price must be a valid number greater than 0.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/products", {
        title,
        price: parseFloat(price),
        description,
      });

      console.log("Product created:", response.data);
      setSuccess("Product created successfully!");

      setTitle("");
      setPrice("");
      setDescription("");

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to create product. Please try again.");
    }
  };

  return (
    <div>
      <h2>Product Manager</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit} className="form">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Create</button>
      </form>
      <br></br>
      <button onClick={() => navigate("/products")} className="view-products-btn">
        View All Products
      </button>
    </div>
  );
};

export default ProductForm;
