import { useContext } from "react";
import "../assets/css/bootstrap.min.css";
import { CartContext } from "../Extra-pages/cartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const { cartItem, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
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
        <div className="header-div">
          <b>
            <button
              onClick={() => navigate("/everlane")}
              className="btn btn-link text-dark text-start fs-3"
            >
              Home
            </button>
          </b>
          <b className="fs-1">Cart</b>
        </div>
      </h2>
      {!cartItem || cartItem.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          {cartItem.map((item) => (
            <div className="cart-con border-bottom" key={item.id}>
              <div key={item.id} className="w-50 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid cart-img"
                />
              </div>
              <div className="cart-text w-50 fs-3 text-center ">
                <div>
                  <span className="cart-title">{item.title}</span>
                  <br />
                  <div className="cart-description">{item.description}</div>
                  <span>
                    <br />
                    <b>Price:</b> ${item.price}
                    <br />
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove from cart
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="row w-100" style={{ height: 80, marginLeft: 0.2 }}>
            <div className="total-div col-12 col-sm-12">
              <div>
                <b className="fs-3">Total:</b> $
                {Math.floor(
                  cartItem.reduce((acc, item) => acc + item.price, 0)
                )}
              </div>
              <div className="">
                <button className="btn btn-dark">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
