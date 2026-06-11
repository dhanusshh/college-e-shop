import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [college, setCollege] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async () => {
    if (
      !name ||
      !email ||
      !phone ||
      !college ||
      !password
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    try {
      setLoading(true);

      await API.post(
        "/auth/register",
        {
          name,
          email,
          phone,
          college,
          password,
        }
      );

      alert(
        "Registration Successful"
      );

      navigate("/");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Account
            </h2>

            <input
              className="form-control mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

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
              className="form-control mb-3"
              placeholder="Phone"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
            />

            <input
              className="form-control mb-3"
              placeholder="College Name"
              value={college}
              onChange={(e) =>
                setCollege(
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
              className="btn btn-success w-100"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/">
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Signup;