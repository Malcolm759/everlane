import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import cart from "../assets/shopping cart.png";
import "../assets/css/bootstrap.min.css";
import "./shopNow.css";
import { CartContext } from "../Extra-pages/cartContext.jsx";

function ShopNow() {
  const navigate = useNavigate();
  const [visualData, setVisualData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products").then(
          (res) =>
            res.json().then((data) => {
              setVisualData(data);
            })
        );
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchedData();
  }, []);

  const { setCartItem } = useContext(CartContext);

  const handleSelect = (item) =>
    setCartItem((prev) =>
      prev.some((cartItem) => cartItem.id === item.id) ? prev : [...prev, item]
    );

  return (
    <>
      <div>
        <header className="container-fluid h-25 bg-dark heading">
          <div className="row text-center">
            <span className="text-light ">
              Get early access on launches and offers.
              <a href="#" className="header-link text-light">
                Sign up for Texts
              </a>
            </span>
          </div>
        </header>

        <h2 className="border-bottom">
          <div className="header-div2">
            <b>
              <button
                onClick={() => navigate("/everlane")}
                className="btn btn-link text-dark text-start fs-4"
              >
                Home
              </button>
            </b>
            <b className="fs-1">Listings</b>
            <button className="btn btn-link" onClick={() => navigate("/cart")}>
              <img src={cart} style={{ objectFit: "contain" }} />
            </button>
          </div>
        </h2>
      </div>

      <div className="container-fluid shopping">
        <div className="row">
          <div className="shop-now-card">
            {visualData.length === 0 ? (
              <p>
                {" "}
                Nothing available at the moment, check your network connection
              </p>
            ) : (
              visualData
                .filter(
                  (item) =>
                    item.category.includes("men") ||
                    item.category.includes("women")
                )
                .map((item) => (
                 
                    <div
                      className=" card h-100 "
                      style={{ width: 350 }}
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                        style={{ height: "200px", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price}</p>
                      </div>

                      <button
                        className="btn btn-dark "
                        onClick={() => handleSelect(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopNow;
