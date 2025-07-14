import "../assets/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="container-fluid ps-4 footer-bg">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-center border">
              <div className="p-2">
                <h5 className="text-dark">
                  <b>Account</b>
                </h5>
                <a href="#">Login</a>
                <br />
                <a href="#">Sign up</a>
                <br />
                <a href="#">Redeem gift card</a>
              </div>

              <div className="p-2">
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

              <div className="p-2">
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
            </div>

            <div className="col-12 col-sm-6 d-inline-flex justify-content-evenly final">
              <div className="p-2 w-50">
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

              <div className="d-flex align-items-center w-50">
                <input type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-dark text-light">▶</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
