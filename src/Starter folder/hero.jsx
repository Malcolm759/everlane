import "../assets/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="container-fluid d-flex align-items-center p-3 hero-sec">
        <div className="row ">
          <div className="col hero-col2 align-item-center">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <span className="fs-1 text-light">your Cozy era</span>
                  <br />
                  <span className="text-light">
                    Get peak Comfy-chic
                    <br />
                    with new winter essentials
                  </span>
                  <br />
                  <button className="btn btn-light mt-1 w-50"
                  onClick={() => navigate("/shop-now")}
                  >Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
