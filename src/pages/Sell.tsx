import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Sell = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState<File | null>(
    null
  );

  const [preview, setPreview] = useState("");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      e.target.files &&
      e.target.files[0]
    ) {
      setImage(e.target.files[0]);

      setPreview(
        URL.createObjectURL(
          e.target.files[0]
        )
      );
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !productName ||
      !category ||
      !price ||
      !quantity ||
      !description ||
      !image
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const formData = new FormData();

      formData.append(
        "title",
        productName
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "description",
        description
      );

      formData.append(
        "price",
        price
      );

      formData.append(
        "quantity",
        quantity
      );

      formData.append(
        "image",
        image
      );

      await axios.post(
        "https://college-e-shop-backend-1.onrender.com/api/products",
        formData,
        {
          headers: {
            Authorization:
              localStorage.getItem(
                "token"
              ) || "",
          },
        }
      );

      alert(
        "Product Listed Successfully"
      );

      setProductName("");
      setCategory("");
      setPrice("");
      setQuantity("");
      setDescription("");
      setImage(null);
      setPreview("");

    } catch (error) {
      console.error(error);

      alert(
        "Failed To Upload Product"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <div className="text-center mb-5">

          <h1 className="display-4 fw-bold">
            Sell Your Gear
          </h1>

          <p className="text-muted fs-5">
            List your premium items for
            the elite community
          </p>

        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className="card shadow p-4">

              <form
                onSubmit={handleSubmit}
              >

                <div className="mb-3">

                  <label className="form-label">
                    Product Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={productName}
                    onChange={(e) =>
                      setProductName(
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Category
                  </label>

                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) =>
                      setCategory(
                        e.target.value
                      )
                    }
                  >
                    <option value="">
                      Select Category
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

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Price
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={price}
                      onChange={(e) =>
                        setPrice(
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Stock Quantity
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(
                          e.target.value
                        )
                      }
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Detailed Description
                  </label>

                  <textarea
                    rows={5}
                    className="form-control"
                    value={description}
                    onChange={(e) =>
                      setDescription(
                        e.target.value
                      )
                    }
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Upload Product Image
                  </label>

                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={
                      handleImageChange
                    }
                  />

                </div>

                {preview && (
                  <div className="text-center mb-4">

                    <img
                      src={preview}
                      alt="Preview"
                      className="img-fluid rounded shadow"
                      style={{
                        maxHeight:
                          "250px",
                      }}
                    />

                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  List Product Now
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Sell;