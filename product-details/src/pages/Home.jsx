import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="page loading-page">
        <div className="loader"></div>
        <h2>Loading Products...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page empty-state">
        <h2>Something went wrong 😕</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="page-heading">
        <p>Explore our collection</p>
        <h1>Products</h1>
        <span>
          Browse products and view their complete details.
        </span>
      </div>

      <div className="product-count">
        <strong>{products.length}</strong> Products Available
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;