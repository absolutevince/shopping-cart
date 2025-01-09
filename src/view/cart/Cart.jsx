import { useContext } from "react";
import CartContext from "../../hooks/cartContext";
import style from "./cart.module.css";

export default function Cart() {
  const cart = useContext(CartContext);

  return (
    <div className={style.default}>
      <section>
        <ul className={style.list}>
          {cart.getQuantity() > 0 &&
            cart.getItems().map((game) => (
              <li key={game.id} className={style.item}>
                <div className={style.title}>
                  <h3>{game.title}</h3>
                </div>
                <div className={style.quantity}>
                  <p>{game.quantity}x</p>
                </div>
                <div className={style.price}>
                  <p>${game.totalPrice}</p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
