import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="page loading-page">
        <div className="loader"></div>
        <h2>Loading Product...</h2>
        <p>Please wait...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page empty-state">
        <h2>Product Not Found 😕</h2>

        <p>{error}</p>

        <button onClick={() => navigate("/")}>
          ← Back to Products
        </button>
      </section>
    );
  }

  return (
    <section className="page">
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Products
      </button>

      <div className="product-details">

        <div className="product-details-image">
          <img
            src={product.images[0]}
            alt={product.title}
          />
        </div>

        <div className="product-details-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="product-rating">
            ⭐ {product.rating}
          </div>

          <h2 className="details-price">
            ${product.price}
          </h2>

          <p className="details-description">
            {product.description}
          </p>

          <button onClick={() => navigate("/")}>
            Continue Shopping →
          </button>

        </div>
      </div>
    </section>
  );
}

export default ProductDetails;