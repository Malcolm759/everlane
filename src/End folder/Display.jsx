import "../assets/css/bootstrap.min.css";
import woman1 from "../assets/Extra-pictures/woman.jpg";
import woman2 from "../assets/Extra-pictures/black_woman.jpg";
import woman3 from "../assets/Extra-pictures/black_beauty.jpg";
import image from "../assets/Extra-pictures/artistic.jpg";
import img2 from "../assets/Extra-pictures/black.jpg";
import location from "../assets/Extra-pictures/location.png";
import deployed from "../assets/Extra-pictures/deployed.png";
import cycle from "../assets/Extra-pictures/cycle.png";

function Display() {
  return (
    <>
      <section className="display-con mb-4 ">
        <div className="container-fluid">
          <div className="row">
            <header className="text-center col">
              <span className="fs-3"> Everlane on you</span>
              <br />
              <span>
                Share your latest look with #Everlaneonyou to stand a chance to
                get featured
              </span>
              <br />
              <a href="#" className="text-dark">
                Add your photo
              </a>
            </header>
          </div>
          <div className="row mt-4 ">
            <div className="col-12 col-sm-3">
              <img
                src={woman1}
                alt="first image"
                className="img-fluid fluid-1"
              />
            </div>

            <div className="col-12 col-sm-3">
              <img src={img2} alt="first image" className="img-fluid fluid-1" />
            </div>

            <div className="col-12 col-sm-3">
              <img
                src={woman3}
                alt="first image"
                className="img-fluid fluid-1"
              />
            </div>

            <div className="col-12 col-sm-3">
              <img
                src={image}
                alt="first image"
                className="img-fluid fluid-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" mb-4 py-4">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-4 text-center display-con">
              <img src={deployed} height={50} />
              <br />
              <b>Complimentary shipping </b>
              <br />
              <span>Enjoy free shippig on US orders over $100.</span>
            </div>

            <div className="col-6 col-sm-4 text-center  display-con">
              <img src={cycle} height={50} />
              <br />
              <b>Consciously crafted</b>
              <br />
              <span>Designed with you and the planet in mind.</span>
            </div>

            <div className="col-12 col-sm-4 text-center display-con">
              <img src={location} height={50} />
              <br />
              <b>Come say Hi</b>
              <br />
              <span>We have 11 stores across the US.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Display;
