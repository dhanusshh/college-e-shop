import { Link, useNavigate } from "react-router-dom";
import {
  useContext,
  useEffect,
  useState,
} from "react";

import { CartContext } from "../context/CartContext";
import API from "../api/axios";

const Navbar = () => {
  const navigate = useNavigate();

  const { cartItems } =
    useContext(CartContext);


  const [alertCount, setAlertCount] =
    useState(0);

  const totalItems = cartItems.reduce(
    (total: number, item: any) =>
      total + item.quantity,
    0
  );

  useEffect(() => {
    loadAlerts();
  }, []);

 const loadAlerts = async () => {
  try {
    const response =
      await API.get("/alerts");

    const unreadAlerts =
      response.data.filter(
        (alert: any) => !alert.isRead
      );

    setAlertCount(
      unreadAlerts.length
    );
  } catch (error) {
    console.log(error);
  }
};

  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };

 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/home"
        >
          🎓 College E-Shop

          <span className="badge bg-success ms-2">
            Campus
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/store"
              >
                Store
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/alerts "
              >
                Alerts

                {alertCount > 0 && (
                  <span className="badge bg-danger ms-1 pulse">
                    {alertCount}
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
              >
                Cart

                {totalItems > 0 && (
                  <span className="badge bg-warning text-dark ms-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sell"
              >
                Sell
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/account"
              >
                Account
              </Link>
            </li>

            <li className="nav-item ms-2">

              

            </li>

            <li className="nav-item ms-2">

              <button
                className="btn btn-danger"
                onClick={
                  handleLogout
                }
              >
                Logout
              </button>

            </li>

          </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;