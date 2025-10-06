import "../assets/css/bootstrap.min.css";
import clothing from "../assets/Mens clothes/male-1.jpg";
import clothing2 from "../assets/Mens clothes/shirt-2.jpg";
import clothing3 from "../assets/Mens clothes/shirt-3.jpg";
import clothing4 from "../assets/Mens clothes/shirts-4.jpg";
import clothing5 from "../assets/Mens clothes/shirts-5.jpg";
import clothing6 from "../assets/Mens clothes/trousers.jpg";
import sweater from "../assets/sweater2.jpg";

function Categories() {
  return (
    <>
      <section className=" container Cat-sec">
        <div className="row">
          <header className="col text-center fs-3">Shop By Category</header>
          <section className="mt-3 d-flex justify-content-around cat-shop">
            <div className="row">
              <div className="text-center col-6 col-sm-2">
                <img src={sweater}   className="img-query shop-img img-fluid"/>
                <br />
                <a href="#">Sweaters</a>
              </div>

              <div className="text-center col-6 col-sm-2">
                <img src={clothing2}   className="img-query shop-img img-fluid" />
                <br />
                <a href="#">Whites</a>
              </div>

              <div className="text-center col-6 col-sm-2">
                <img src={clothing3}   className="shop-img img-fluid"/>
                <br />
                <a href="#">Corporate clothing</a>
              </div>

              <div className="text-center col-6 col-sm-2">
                <img src={clothing4}  className="shop-img img-fluid" />
                <br />
                <a href="#">Suits</a>
              </div>

              <div className="text-center col-6 col-sm-2">
                <img src={clothing5}   className="shop-img img-fluid"/>
                <br />
                <a href="#">Tuxedos</a>
              </div>

              <div className="text-center col-6 col-sm-2 ">
                <img src={clothing6}   className="shop-img img-fluid"/>
                <br />
                <a href="#">Trousers</a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Categories;
