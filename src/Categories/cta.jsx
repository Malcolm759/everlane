import "../assets/css/bootstrap.min.css";

function Cta() {
  return (
    <>
     
        <section className="cta d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col  w-100 text-center">
                <div>
                  <p className="fs-2 text-light ">
                    We are on a mission to clean up the industry
                  </p>
                  <span className="text-light fs-5">
                    Read about the progress in our latest impact report
                  </span>
                  <br />
                  <button className="btn btn-light mt-4"> learn more</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
  );
}

export default Cta;
