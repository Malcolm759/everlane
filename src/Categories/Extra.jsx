import "../assets/css/bootstrap.min.css";

function Extra() {
  return (
    <>
      <div className="mb-4">
        <section className=" container-fluid img-con mt-4">
          <div className="row px-4 h-100 d-flex justify-content-center mb-4">
            <div className="d-flex justify-content-between row w-100 ">
              <div className="coll1 col-sm-4 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <span className="text-light fs-3">New Arrivals</span>
                  <br />
                  <button className="btn btn-light">Shop the latest</button>
                </div>
              </div>

              <div className="coll2 col-sm-3 d-flex align-items-center justify-content-center mb-4">
                <div className="text-center">
                  <span className="text-light fs-3">Best-sellers</span>
                  <br />
                  <button className="btn btn-light">Shop your favorites</button>
                </div>
              </div>

              <div className="coll3 col-sm-4 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <span className="text-dark fs-3">The Holiday Outfit</span>
                  <br />
                  <button className="btn btn-light">Shop occasion</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Extra;
