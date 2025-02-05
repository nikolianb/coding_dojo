import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch(() => navigate("/products"));
  }, [id, navigate]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => navigate("/products"))
      .catch((error) => console.log("Delete Error:", error));
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <Link to={`/edit/${product._id}`}><button>Edit</button></Link>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;
