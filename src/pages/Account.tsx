import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/axios";

import {
  useEffect,
  useState,
} from "react";

const Account = () => {
  const [activeTab, setActiveTab] =
    useState("purchases");

  const [profile, setProfile] =
    useState<any>({});

  const [stats, setStats] =
    useState<any>({
      purchases: 0,
      sales: 0,
      inventory: 0,
      trades: 0,
    });

  useEffect(() => {
    loadProfile();
    loadStats();
  }, []);

  const loadProfile = async () => {
  try {
    

    const response = await API.get(
      "/users/profile",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    setProfile(response.data);
  } catch (error) {
    console.log(error);
  }
};

 const loadStats = async () => {
  try {
    

    const response = await API.get(
      "/dashboard/stats",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    setStats(response.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <h1 className="fw-bold mb-4">
          Dashboard
        </h1>

        {/* Profile */}

        <div className="card shadow mb-5">

          <div className="card-body">

            <div className="row align-items-center">

              <div className="col-md-2 text-center">

                <img
                  src="https://cdn.vectorstock.com/i/1000v/51/90/student-avatar-user-profile-icon-vector-47025190.jpg"
                  alt="Profile"
                  className="rounded-circle img-fluid"
                />

              </div>

              <div className="col-md-8">

                <h3>
                  {profile.name}
                </h3>

                <p className="mb-1">
                  📧 {profile.email}
                </p>

                <p className="mb-1">
                  📱 {profile.phone}
                </p>

                <p>
                  🏫 {profile.college}
                </p>

              </div>

              <div className="col-md-2 text-center">

                <button className="btn btn-primary">
                  Edit Profile
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="row mb-5">

          <div className="col-lg-3 col-md-6 mb-3">

            <div className="card text-center shadow">

              <div className="card-body">

                <h3>
                  {stats.purchases}
                </h3>

                <p>Purchases</p>

              </div>

            </div>

          </div>

          <div className="col-lg-3 col-md-6 mb-3">

            <div className="card text-center shadow">

              <div className="card-body">

                <h3>
                  {stats.sales}
                </h3>

                <p>Sales</p>

              </div>

            </div>

          </div>

          <div className="col-lg-3 col-md-6 mb-3">

            <div className="card text-center shadow">

              <div className="card-body">

                <h3>
                  {stats.inventory}
                </h3>

                <p>Inventory</p>

              </div>

            </div>

          </div>

          <div className="col-lg-3 col-md-6 mb-3">

            <div className="card text-center shadow">

              <div className="card-body">

                <h3>
                  {stats.trades}
                </h3>

                <p>Trades</p>

              </div>

            </div>

          </div>

        </div>

        {/* Tabs */}

        <ul className="nav nav-tabs mb-4">

          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab ===
                "purchases"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab(
                  "purchases"
                )
              }
            >
              Purchases
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab ===
                "sales"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab("sales")
              }
            >
              Sales
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab ===
                "inventory"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab(
                  "inventory"
                )
              }
            >
              Inventory
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab ===
                "trades"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveTab(
                  "trades"
                )
              }
            >
              Trades
            </button>
          </li>

        </ul>

        <div className="card shadow">

          <div className="card-body">

            {activeTab ===
              "purchases" && (
              <>
                <h4>
                  Purchase History
                </h4>

                <p>
                  No purchases yet.
                </p>
              </>
            )}

            {activeTab ===
              "sales" && (
              <>
                <h4>
                  Sales History
                </h4>

                <p>
                  No sales yet.
                </p>
              </>
            )}

            {activeTab ===
              "inventory" && (
              <>
                <h4>
                  Inventory
                </h4>

                <p>
                  No products listed.
                </p>
              </>
            )}

            {activeTab ===
              "trades" && (
              <>
                <h4>
                  Trade Requests
                </h4>

                <p>
                  No trade requests.
                </p>
              </>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Account;