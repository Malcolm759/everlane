import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Extra-pages/cart.jsx";
import { CartProvider } from "./Extra-pages/cartContext.jsx";
import { Navigate } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import About from "./Extra-pages/about.jsx";
import ShopNow from "./Extra-pages/shop-now.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/everlane", element: <Navigate to="/" replace /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/shop-now", element: <ShopNow /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

function Root() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
