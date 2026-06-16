import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert(
        "Please enter email and password"
      );
      return;
    }

    try {
      setLoading(true);

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password,
          }
        );
        console.log("FULL RESPONSE", response.data);
console.log("TOKEN", response.data.token);
console.log("USER", response.data.user);
      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      );

      alert("Login Successful");

      navigate("/home");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Invalid Credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              className="btn btn-primary w-100"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>

            <p className="mt-3 text-center">
              New User?{" "}
              <Link to="/signup">
                Sign Up
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;