import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import API from "../api/axios";

const Store = () => {
  const [products, setProducts] =
    useState<any[]>([]);
console.log("PRODUCTS:", products);
  const [searchTerm, setSearchTerm] =
    useState("");

  const [category, setCategory] =
    useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response =
        await API.get("/products");

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProducts =
    products.filter((product: any) => {
      const matchesSearch =
        product.title
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <h1 className="fw-bold mb-4">
          Explore Store
        </h1>

        <div className="row mb-4">

          <div className="col-md-8 mb-3">

            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
            />

          </div>

          <div className="col-md-4">

            <select
              className="form-select"
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
            >
              <option value="All">
                All Categories
              </option>

              <option value="Books">
                Books
              </option>

              <option value="Electronics">
                Electronics
              </option>

              <option value="Lab Equipment">
                Lab Equipment
              </option>

              <option value="Sports">
                Sports
              </option>

              <option value="Stationery">
                Stationery
              </option>

            </select>

          </div>

        </div>

        {filteredProducts.length ===
        0 ? (
          <div className="text-center mt-5">

            <h4>
              No Products Found
            </h4>

            <p className="text-muted">
              Try changing your
              search or filter.
            </p>

          </div>
        ) : (
          <div className="row g-4">

            {filteredProducts.map(
              (product: any) => (
                <div
                  key={product._id}
                  className="col-lg-4 col-md-6"
                >
                  <ProductCard
                    product={product}
                  />
                </div>
              )
            )}

          </div>
        )}

      </div>

      <Footer />
    </>
  );
};

export default Store;