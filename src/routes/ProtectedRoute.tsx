import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  return token
    ? children
    : <Navigate to="/" />;
};

export default ProtectedRoute;