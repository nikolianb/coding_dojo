import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch(() => navigate("/"));
  }, [id, navigate]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;
