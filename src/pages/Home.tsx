import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground
from "../components/ParticlesBackground";
const Home = () => {
  const navigate = useNavigate();
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section
  className="hero-section bg-dark text-white py-5  position-relative"
  data-aos="fade-down" 
>
    <ParticlesBackground />
    
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="display-4 fw-bold">
                Buy, Sell & Trade
                Within Your Campus
              </h1>

              <p className="lead mt-3">
                College E-Shop helps students
                buy and sell books, gadgets,
                lab equipment, sports gear and
                much more within the college
                community.
              </p>

              <div className="mt-4 d-flex gap-3">

                <button
                  className="btn btn-primary btn-lg glow-btn"
                  onClick={() =>
                    navigate("/store")
                  }
                >
                  Explore Store
                </button>

                <button
                  className="btn btn-success btn-lg glow-btn"
                  onClick={() =>
                    navigate("/sell")
                  }
                >
                  Start Selling
                </button>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  alt="Students"
  className="img-fluid rounded shadow float-animation"
/>
              <img
  src="..."
  className="img-fluid rounded shadow float-animation"
  alt="Hero"
/>

            </div>

          </div>

        </div>
      </section>

      {/* Featured Carousel */}

      <div
  className="container my-5"
  data-aos="fade-up"
>

        <h2 className="text-center fw-bold mb-4">
          Featured Products
        </h2>

        <div
           id="featuredCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="5000"
        >

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="https://images.openai.com/static-rsc-4/c0V17wbiXsWBdmfJd60U5kpkDf6qHNsgWPLSftIbDYTj_52ZyELy_Njm_qSjCU5RpN_bvWVIxeta1jQQwbwusUXvdCL8rlhEre69rEyWBYHo2daU4XLNlWMF4AHYbRumFwyRVUhg5Cwn2f04NcWzi8sBs28kOGN0zcrJ9OUUqxEd3vhPL-fhpR3e36ZUZ3-9?purpose=fullsize"
                className="d-block w-100 rounded"
                alt="Laptop"
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://images.openai.com/static-rsc-4/jwX3JcokQ3GlhD-QTISNu7rfyLbkXiHR-f1ThHLKfju0TM_51hOembxXjd0hz8IoFq2F2I0zyu97Wb1PTctirxK06YISGhG8tomb0CdRyINB3UW6SI1rTgtHayoKSm_7dsvcgNB8x-wF9_lB5m7nVY5kCkyogMm1JweN6xPZGA7S10QwtSDwfSImNe4Qpp-K?purpose=fullsize"
                className="d-block w-100 rounded"
                alt="Books"
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://images.openai.com/static-rsc-4/RXqiKj4AJRnV_4OF-4YVcMM8iuyxJPkj6Zky33UT0xXrQpXJ8ELchF_TYh2hYelSyHEVjLuF8Yc0Xq6UJGIbfDFQCj2_9pxEL5E2-HTxcqu8EkZKMpu_m01cj-tzoRIBV9MUBncNsCS0iSeNGfJIh5Z3fOOoQ8dlEBRWy2ZaZJK1srG3rvfGVDMoeetpL-ce?purpose=fullsize"
                className="d-block w-100 rounded"
                alt="Headphones"
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.openai.com/static-rsc-4/xJJYDx3HWqhWN-iQS6DgO66xZbvIFHBW3dJbJntlIODWi2Og34o38RSNVfGim19I0mMbmMSanPL-JgRU-jPtDCaxEn-6FzkK2W53hl3DOamF2tKZb_8fK1M5zD0tkgsKHMHCwLKXQl_aHD2gr9owXUA5gbg4MeF8ih_8_XbmJ3RdYh2oPEh7Qyb0KQNI_H7S?purpose=fullsize"
                className="d-block w-100 rounded"
                alt="Headphones"
                style={{
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

      </div>

      {/* Collaboration Section */}

       <section className="container my-5">

        <h2 className="text-center fw-bold mb-4">
          Trusted Campus Partners
        </h2>

        <div className="row g-4">

          <div className="col-md-3"
  data-aos="zoom-in">
            <div className="card shadow text-center p-3 h-100 partner-card">
              <h4>Amazon</h4>
              <p>
                Exclusive student discounts
                on electronics and books.
              </p>
            </div>
          </div>

          <div className="col-md-3"
  data-aos="zoom-in">
            <div className="card shadow text-center p-3 h-100 partner-card">
              <h4>Flipkart</h4>
              <p>
                Campus offers and internship
                opportunities.
              </p>
            </div>
          </div>

          <div className="col-md-3"
  data-aos="zoom-in">
            <div className="card shadow text-center p-3 h-100 partner-card">
              <h4>Apple</h4>
              <p>
                Student pricing on MacBooks
                and iPads.
              </p>
            </div>
          </div>

          <div className="col-md-3"
  data-aos="zoom-in">
            <div className="card shadow text-center p-3 h-100 partner-card">
              <h4>Samsung</h4>
              <p>
                Smart device collaborations
                for students.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Advertisement Banner */}

      <section
  className="container my-5"
  data-aos="fade-left"
>

        <div className="card bg-primary text-white shadow-lg">

          <div className="card-body text-center p-5">

            <h2 className="fw-bold">
              Advertise With College E-Shop
            </h2>

            <p className="lead">
              Reach thousands of students,
              buyers and sellers across
              campus.
            </p>

            <button className="btn btn-light btn-lg">
              Partner With Us
            </button>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="container my-5">

        <h2 className="text-center fw-bold mb-5">
          Why Choose College E-Shop?
        </h2>

        <div className="row text-center">

          <div  className="col-md-4 mb-4"
  data-aos="flip-left">
            <div className="card shadow p-4 h-100 ">
              <h4>Trusted Community</h4>
              <p>
                Buy and sell safely within
                your college network.
              </p>
            </div>
          </div>

          <div  className="col-md-4 mb-4"
  data-aos="flip-left">
            <div className="card shadow p-4 h-100 ">
              <h4>Affordable Prices</h4>
              <p>
                Find second-hand products at
                student-friendly prices.
              </p>
            </div>
          </div>

          <div  className="col-md-4 mb-4"
  data-aos="flip-left">
            <div className="card shadow p-4 h-100 ">
              <h4>Quick Transactions</h4>
              <p>
                Connect directly with buyers
                and sellers on campus.
              </p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Home;