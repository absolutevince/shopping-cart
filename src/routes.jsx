import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./view/home/Home";
import Shop from "./view/shop/Shop";
import Cart from "./view/cart/Cart";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
