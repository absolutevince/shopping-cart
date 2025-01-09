import { useContext } from "react";
import CartContext from "../../hooks/cartContext";
import Button from "../../components/button/Button";
import style from "./cart.module.css";

export default function Cart() {
  const cart = useContext(CartContext);

  const handleIncreaseQuantity = (gameId) => {
    cart.increaseQuantity(gameId);
  };

  const handleDecreaseQuantity = (gameId) => {
    cart.decreaseQuantity(gameId);
  };

  const handleRemoveToCart = (gameId) => {
    cart.removeToCart(gameId);
  };

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
                  <Button onClick={() => handleIncreaseQuantity(game.id)}>
                    +
                  </Button>
                  <p>{game.quantity}x</p>
                  <Button onClick={() => handleDecreaseQuantity(game.id)}>
                    -
                  </Button>
                </div>
                <div className={style.price}>
                  <p>${game.totalPrice}</p>
                </div>
                <Button
                  variant={"buttonError"}
                  onCliBk={() => handleRemoveToCart(game.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
