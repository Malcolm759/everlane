import "../assets/css/bootstrap.min.css";
import clothing from "../assets/Mens clothes/male-1.jpg";
import clothing2 from "../assets/Mens clothes/shirt-2.jpg";
import clothing3 from "../assets/Mens clothes/shirt-3.jpg";
import clothing4 from "../assets/Mens clothes/shirts-4.jpg";
import clothing5 from "../assets/Mens clothes/shirts-5.jpg";
import clothing6 from "../assets/Mens clothes/trousers.jpg";

function Categories() {
  return (
    <>
      <section className=" container-fluid mt-4 Cat-sec">
        <div className="row">
          <header className="col text-center fs-5">Shop By Category</header>
          <section className="mt-3 d-flex justify-content-around cat-shop">
            <div className="row">
              <div className="text-center col">
                <img src={clothing}  height={130} />
                <br />
                <a href="#">Sweaters</a>
              </div>

              <div className="text-center col">
                <img src={clothing2}  height={130} className="img-query" />
                <br />
                <a href="#">Whites</a>
              </div>

              <div className="text-center col">
                <img src={clothing3}  height={130}/>
                <br />
                <a href="#">Corporate clothing</a>
              </div>

              <div className="text-center col ">
                <img src={clothing4} height={130} />
                <br />
                <a href="#">Suits</a>
              </div>

              <div className="text-center col">
                <img src={clothing5}  height={130}/>
                <br />
                <a href="#">Tuxedos</a>
              </div>

              <div className="text-center col">
                <img src={clothing6}  height={130} />
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
