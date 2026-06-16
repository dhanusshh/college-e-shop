import { useContext } from "react";
import { CartContext } from "../context/CartContext";

type Props = {
  product: any;
};

const ProductCard = ({
  product,
}: Props) => {
  const { addToCart } =
    useContext(CartContext);

  return (
    <div className="card shadow h-100 product-card">

      <img
        src={`https://college-e-shop-backend-1.onrender.com/uploads/${product.image}`}
        className="card-img-top"
        alt={product.title}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="fw-bold">
          {product.title}
        </h5>

        <p className="text-muted">
          {product.description}
        </p>

        <h6 className="text-success mb-3">
          ₹{product.price}
        </h6>

        <button
          className="btn btn-primary mt-auto"
          onClick={() =>
            addToCart(product)
          }
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;