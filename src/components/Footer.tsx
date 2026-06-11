import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">

        <div className="row">

          {/* Brand */}

          <div className="col-lg-4 mb-4">

            <h4 className="fw-bold">
              🎓 College E-Shop
            </h4>

            <p className="text-light-emphasis">
              Buy, Sell & Connect Across Campus.
              Your trusted marketplace for students.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-4 mb-4">

            <h5 className="fw-bold">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li>
                <a
                  href="/home"
                  className="text-decoration-none text-light"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/store"
                  className="text-decoration-none text-light"
                >
                  Store
                </a>
              </li>

              <li>
                <a
                  href="/sell"
                  className="text-decoration-none text-light"
                >
                  Sell
                </a>
              </li>

              <li>
                <a
                  href="/account"
                  className="text-decoration-none text-light"
                >
                  Account
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-4 mb-4">

            <h5 className="fw-bold">
              Contact Us
            </h5>

            <p>
              <FaEnvelope className="me-2" />
              support@collegeeshop.com
            </p>

            <div className="d-flex gap-3 fs-4">

              <FaFacebook
                style={{
                  cursor: "pointer",
                }}
              />

              <FaInstagram
                style={{
                  cursor: "pointer",
                }}
              />

              <FaLinkedin
                style={{
                  cursor: "pointer",
                }}
              />

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          <p className="mb-0">
            © 2026 College E-Shop.
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;