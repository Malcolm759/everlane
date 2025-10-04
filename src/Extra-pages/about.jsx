import "../assets/css/bootstrap.min.css";
import "./about.css";
import asian from "../assets/about/asian.jpg";
import suitcase from "../assets/about/suitcase.jpg";
import hero from "../assets/about/section-01.jpg";
import sweater from "../assets/about/sweater.jpg";
import math from "../assets/about/math.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function About() {
  return (
    <>
      <header className="container-fluid h-25 bg-dark heading">
        <div className="row text-center">
          <span className="text-light ">
            Get early access on launches and offers.
            <a href="#" className="header-link text-light">
              Sign up for Texts
            </a>
          </span>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <Link to="/everlane" className="text-dark">
            Back
          </Link>

          <header className="text-center fs-3 fw-bold">Everlane</header>

          <ul className="about-ul col-12 col-sm-12">
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Factories</a>
            </li>
            <li>
              <a href="#">Environmental incentives</a>
            </li>
            <li>
              <a href="#">Our carbon commitment</a>
            </li>
            <li>
              <a href="#">Annual impact report</a>
            </li>
            <li>
              <a href="#">Cleaner fashion</a>
            </li>
          </ul>
        </div>

        <img src={hero} alt="" className="img-fluid" />

        <div className="row p-4 mt-4">
          <div className="col-12 col-sm-12 fs-4 d-block text-center text-font">
            At Everlane, we want the right choice to be as easy as putting on a
            great T-shirt. That’s why we partner with the best, ethical
            factories around the world. Source only the finest materials. And
            share those stories with you down to the true cost of every product
            we make. It’s a new way of doing things. We call it Radical
            Transparency.
          </div>
        </div>

        <div className="row mt-4 text-font  ">
          <div className="col-sm-6 col-12">
            <img src={asian} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-12 d-flex align-items-center back-teal">
            <div className="p-3">
              <span>Our Factories</span>

              <h2>
                <b>Our Ethical approach</b>
              </h2>

              <p>
                We spend months finding the best factories around the world—the
                same ones that produce your favorite designer labels. We visit
                them often and build strong personal relationships with the
                owners. Each factory is given a compliance audit to evaluate
                factors like fair wages, reasonable hours, and environment. Our
                goal? A score of 90 or above for every factory.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <img src={suitcase} className="img-fluid" />
          </div>
        </div>

        <div className="row text-font mt-4">
          <div className="col-12 col-sm-6 back-teal d-flex align-items-center">
            <div className="p-3">
              <span>Our Quality</span>

              <h2>
                <b>Designed to last</b>
              </h2>

              <p>
                At Everlane, we’re not big on trends. We want you to wear our
                pieces for years, even decades, to come. That’s why we source
                the finest materials and factories for our timeless products—
                like our Grade-A cashmere sweaters, Italian shoes, and Peruvian
                Pima tees.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <img src={sweater} className="img-fluid" />
          </div>
        </div>

        <div className="mt-4">
          <img src={math} className="img-fluid" />
        </div>
      </div>

       <footer className="mt-4 ">
        <div className="container-fluid ps-4 footer-bg">
          <div className="row d-flex justify-content-between">
            <div className="p-2 col-sm-2">
              <h5 className="text-dark">
                <b>Account</b>
              </h5>
              <a href="#">Login</a>
              <br />
              <a href="#">Sign up</a>
              <br />
              <a href="#">Redeem gift card</a>
            </div>

            <div className="p-2 col-sm-2">
              <h5 className="text-dark mb-4">
                <b>Company</b>
              </h5>
              <a href="#">About</a>
              <br />
              <a href="#">Environmental Inititives</a>
              <br />
              <a href="#">Factories</a>
              <br />
              <a href="#">DEI</a>
              <br />
              <a href="#">Careers</a>
              <br />
              <a href="#">International</a>
              <br />
              <a href="#">Accessibility</a>
            </div>

            <div className="p-2 col-sm-2">
              <h5 className="text-dark mb-4">
                <b>Get Help</b>
              </h5>
              <a href="#">Help Center</a>
              <br />
              <a href="#">Return policy</a>
              <br />
              <a href="#">Shipping Info</a>
              <br />
              <a href="#">Bulk orders</a>
            </div>

            <div className="p-2 col-sm-2">
              <h5 className="text-dark mb-4">
                <b>Connect</b>
              </h5>
              <a href="#">Facebook</a>
              <br />
              <a href="#">Instagram</a>
              <br />
              <a href="#">Twitter</a>
              <br />
              <a href="#">Affiliates</a>
              <br />
              <a href="#">Our Stores</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
