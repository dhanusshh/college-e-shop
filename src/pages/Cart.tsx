import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total: number, item: any) =>
      total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total: number, item: any) =>
      total +
      item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-4">
          My Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="card shadow text-center p-5">

            <h1>🛒</h1>

            <h3 className="fw-bold">
              Your Cart is Empty
            </h3>

            <p className="text-muted">
              Browse the store and add
              products to your cart.
            </p>

            <button
              className="btn btn-primary mt-3"
              onClick={() =>
                navigate("/store")
              }
            >
              Explore Store
            </button>

          </div>
        ) : (
          <>
            {cartItems.map(
              (item: any) => (
                <div
                  key={item._id}
                  className="card shadow mb-4"
                >
                  <div className="row g-0">

                    <div className="col-md-3">

                      <img
                        src={`http://college-e-shop-backend-1.onrender.com/${item.image}`}
                        alt={item.title}
                        className="img-fluid rounded-start"
                        style={{
                          height:
                            "220px",
                          objectFit:
                            "cover",
                          width: "100%",
                        }}
                      />

                    </div>

                    <div className="col-md-9">

                      <div className="card-body">

                        <h4>
                          {item.title}
                        </h4>

                        <p className="text-muted">
                          {
                            item.description
                          }
                        </p>

                        <h5 className="text-success">
                          ₹{item.price}
                        </h5>

                        <div className="d-flex align-items-center gap-2 my-3">

                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              decreaseQuantity(
                                item._id
                              )
                            }
                          >
                            -
                          </button>

                          <span className="fw-bold">
                            {
                              item.quantity
                            }
                          </span>

                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              increaseQuantity(
                                item._id
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <div className="d-flex gap-2">

                          <button
                            className="btn btn-success"
                          >
                            Buy Now
                          </button>

                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              removeFromCart(
                                item._id
                              )
                            }
                          >
                            Remove
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              )
            )}

            <div className="card shadow p-4">

              <h4>
                Price Details
              </h4>

              <hr />

              <div className="d-flex justify-content-between">
                <span>
                  Total Items
                </span>

                <span>
                  {totalItems}
                </span>
              </div>

              <div className="d-flex justify-content-between mt-2">

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>

              <div className="d-flex gap-2 mt-4">

                <button
                  className="btn btn-primary flex-fill"
                >
                  Proceed To Checkout
                </button>

                <button
                  className="btn btn-outline-danger"
                  onClick={
                    clearCart
                  }
                >
                  Clear Cart
                </button>

              </div>

            </div>
          </>
        )}

      </div>

      <Footer />
    </>
  );
};

export default Cart;