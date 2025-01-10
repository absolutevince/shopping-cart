import style from "./header.module.css";
import CustomLink from "../link/CustomLink";
import { useContext } from "react";
import CartContext from "../../hooks/cartContext";
import Button from "../button/Button";
import PopupCart from "../popup-cart/PopupCart";

export default function Header() {
  const cart = useContext(CartContext);
  return (
    <header className={style.default}>
      <h1>GameBreaking</h1>
      <ul>
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/shop">Shop</CustomLink>
        </li>
        <li className={style.cartLink}>
          <CustomLink to="/cart">Cart</CustomLink>
          {cart.newAddedCount > 0 && (
            <Button onClick={() => cart.openPopupCart()}>
              {cart.newAddedCount}
            </Button>
          )}
        </li>
      </ul>
      {cart.popupView && <PopupCart />}
    </header>
  );
}
