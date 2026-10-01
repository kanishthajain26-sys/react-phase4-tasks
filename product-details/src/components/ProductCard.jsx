import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-box">
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p className="product-price">
          ${product.price}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="details-btn"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;