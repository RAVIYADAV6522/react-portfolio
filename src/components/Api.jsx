import React, { useEffect, useState } from "react";

function Api() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error(`Failed to fetch! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {!loading &&
          !error &&
          products.map((product) => (
            <div
              key={product.id}
              style={{
                width: "250px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
              <h3>{product.title}</h3>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p>{product.description.slice(0, 20)}...</p>
              <p style={{ color: "orange" }}>
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Api;
