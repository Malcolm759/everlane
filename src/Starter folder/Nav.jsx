import "../assets/css/bootstrap.min.css";
import image1 from "../assets/user.png";
import search from "../assets/search.png";
import cart from "../assets/shopping cart.png";

function Nav() {
  return (
    <>
      <section className="container-fluid border">
        <div className="row">
          <nav className="border-bottom border navbar">
            <div className="col-12 col-sm-6 eve-flex">
              <span className="fs-3 headline text-center">Everlane</span>

              <div className=" h-icons col-12 col-sm-4 ">
                <a href="#">
                  <img src={image1} alt="" height={20} />
                </a>
                <a href="#">
                  <img src={search} alt="" height={20} />
                </a>
                <a href="#">
                  <img src={cart} alt="" height={20} />
                </a>
              </div>
            </div>

            <div>
              <ul className="d-inline-flex text-dark u-list">
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Everworld stories</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="nav2">
            <div className="row">
              <div className="col">
                <div className="row d-flex justify-content-center pt-3">
                  <ul className="w-auto d-flex ul-nav2">
                    <li>
                      <a href="#">Holiday gifting</a>
                    </li>
                    <li>
                      <a href="#">New Arrivals</a>
                    </li>
                  </ul>
                  <ul className="w-auto d-flex ul-nav2">
                    <li>
                      <a href="#">Best-sellers</a>
                    </li>
                    <li>
                      <a href="#">Clothing</a>
                    </li>
                  </ul>
                  <ul className="w-auto d-flex ul-nav2">
                    <li>
                      <a href="#">Tops and sweaters</a>
                    </li>
                    <li>
                      <a href="#">Pants & Jeans</a>
                    </li>
                  </ul>
                  <ul className="w-auto d-flex ul-nav2">
                    <li>
                      <a href="#">Outwears</a>
                    </li>
                    <li>
                      <a href="#">Shoes & bags</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Nav;
