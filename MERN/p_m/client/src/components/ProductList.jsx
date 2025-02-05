import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <Link to={`/products/${product._id}`}>{product.title}</Link> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
