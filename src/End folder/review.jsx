import "../assets/css/bootstrap.min.css";
import man from "../assets/Extra-pictures/man.jpg";

function Ending1() {
  return (
    <>
      <div className="px-3">
        <section
          className="container-fluid mt-4 end1-sec mb-4"
          
        >
          <div className="row h-100 d-flex ">
            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
              <div>
                <span className="fs-6"> People are talking</span>
                <br />
                <span> &#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <br />
                <span>
                  "Love this shirt! <br />
                  fits perfectly without being stiff".
                </span>
                <span className="text-dark-emphasis"></span>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <img src={man} alt="man"  className="img-div1" style={{objectFit:'cover'}} />
            </div>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
}

export default Ending1;
