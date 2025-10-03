import "../assets/css/bootstrap.min.css";
import image1 from "../assets/user.png";
import search from "../assets/search.png";
import cart from "../assets/shopping cart.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Extra-pages/cartContext.jsx";

function Nav() {
  const NavItems = [
    { navElement: "About", id: 1 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setApiData(data);
          });
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const [apiData, setApiData] = useState([]);

  const [searcher, setSearcher] = useState("");

  const [openSearchBar, setSearchBar] = useState(null);

  const filteredData = apiData.filter((item) =>
    item.title.toLowerCase().includes(searcher.toLowerCase())
  );

  const [openDropdown, setOpenDropdown] = useState(null);

  function handleMenClick() {
    setOpenDropdown(openDropdown === "men" ? null : "men");
    setSearchBar(false);
  }

  function handleWomenClick() {
    setOpenDropdown(openDropdown === "women" ? null : "women");
    setSearchBar(false);
  }

  // search bar functionality

  function handleSearch() {
    setSearchBar(!openSearchBar);
  }

  // var men = document.getElementById("men");

  const navigate = useNavigate();
  const { setCartItem } = useContext(CartContext);

  const handleSelect = (item) => setCartItem(
    (prev) => prev.some(cartItem => cartItem.id === item.id) ? prev : [...prev, item]
  );

  return (
    <>
      <section className="container-fluid border">
        <div className="row p-2">
          <nav className="border-bottom navbar">
            <div className="col-12 col-sm-6 eve-flex">
              <span className="fs-3 headline text-center">Everlane</span>

              <div className=" h-icons col-12 col-sm-4 ">
                <button className="btn" id="searching" onClick={handleSearch}>
                  <img src={search} alt="" height={20} />
                </button>
                <button className="btn" onClick={()=> navigate('/cart')}>
                  <img src={cart} alt="" height={20} />
                </button>
              </div>
            </div>

            <div>
              <ul className="d-flex text-dark u-list">
                <li>
                  <button
                    className="btn btn-link text-dark"
                    onClick={handleMenClick}
                    id="men"
                  >
                    Men
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-link text-dark "
                    onClick={handleWomenClick}
                    id="women"
                  >
                    Women
                  </button>
                </li>

                {NavItems.map((item) => (
                  <li key={item.id} className="mt-2">
                    <Link to={`/${item.navElement}`}>
                      <h6>{item.navElement}</h6>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* input searchbar */}
          <div className="row">
            <div
              className={`col-12 col-sm-12 w-75 mx-auto p-3 searchbar ${
                !openSearchBar ? "conceal" : "reveal"
              }`}
            >
              <input
                type="text"
                className={`form-control search-input ${
                  !openSearchBar ? "see" : "hide"
                }`}
                placeholder="Search"
                value={searcher}
                onChange={(e) => setSearcher(e.target.value)}
              />
            </div>

            <div
              className={`col-12 col-sm-12 search-filter ${
                !openSearchBar ? "invisible" : "visible"
              }`}
            >
              {searcher && filteredData.length > 0 ? (
                <ul className="list-group">
                  {filteredData.map((item) => (
                    <li key={item.id} className="list-group-item">
                      <button
                        className="btn btn-link text-dark"
                        onClick={() => navigate("/cart") && handleSelect(item)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                searcher && <p className="text-center mt-4">No results found</p>
              )}
            </div>
          </div>

          <nav className="nav2">
            <div className="row p-1">
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

      <div
        className={`bg-white container-fluid faded-con ${
          openDropdown === "men" ? "visible" : "hidden"
        } p-4`}
      >
        <div className={`row  content-con d-flex`}>
          <div className="col-sm-3 col-6">
            <h5 className="">Highlights</h5>
            <p>Shop all new arrivals</p>
            <p>The Gift guide</p>
            <p>New Bottoms</p>
            <p>New tops</p>
            <p>T-shirt Bundles</p>
          </div>

          <div className="col-sm-3 col-6">
            <h5 className="">Featured shops</h5>
            <p>Giftable sweaters</p>
            <p>Uniform & capsule</p>
            <p>Performance and chino shop</p>
            <p>Top related mens clothing</p>
          </div>

          <div className="col-sm-6 d-flex" style={{ gap: 70 }}>
            <div className="outfit p-2 d-flex align-items-start  "></div>

            <div className="giftable  d-flex align-items-start"></div>
          </div>
        </div>
      </div>

      <div
        className={`bg-white container-fluid faded-con-2 ${
          openDropdown === "women" ? "visible" : "hidden"
        } p-4`}
      >
        <div className={`row content-con d-flex`}>
          <div className="col-sm-3 col-6">
            <h5 className="">Highlights</h5>
            <p>Shop all new arrivals</p>
            <p>The Gift guide</p>
            <p>New Bottoms</p>
            <p>New tops</p>
          </div>

          <div className="col-sm-3 col-6">
            <h5 className="">Featured shops</h5>
            <p>Giftable sweaters</p>
            <p>Uniform & capsule</p>
            <p>Performance and Jeans </p>
            <p>Top related womens clothing</p>
          </div>

          <div className="col-sm-6 d-flex" style={{ gap: 70 }}>
            <div className="outfit2 p-2 d-flex align-items-start  "></div>

            <div className="giftable2  d-flex align-items-start"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
