import style from "./header.module.css";
import CustomLink from "../link/CustomLink";
import { useContext } from "react";
import CartContext from "../../hooks/cartContext";
import Button from "../button/Button";

export default function Header() {
  const cart = useContext(CartContext);

  return (
    <header className={style.default}>
      <h1>GameBreaking</h1>
      <ul>
        <li>
          <CustomLink to="/" variant="link dark">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/shop" variant="link dark">
            Shop
          </CustomLink>
        </li>
        <li className={style.cartLink}>
          <CustomLink to="/cart" variant="link dark">
            Cart
          </CustomLink>
          {cart.newAddedCount > 0 && <Button> {cart.newAddedCount}</Button>}
        </li>
      </ul>
    </header>
  );
}
