import axios from "axios";

const API = axios.create({
  baseURL:
    "https://college-e-shop-backend-1.onrender.com/api",
});

export default API;