import { useContext, useEffect, useState } from "react";
import CartContext from "../../hooks/cartContext";
import Button from "../../components/button/Button";
import CheckoutMessage from "../../components/checkout-message/CheckoutMessage";
import style from "./cart.module.css";

export default function Cart() {
  const cart = useContext(CartContext);
  const quantity = cart.getQuantity();
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    cart.resetNewAddedCount();
    cart.closePopupCart();
  }, []);

  const handleIncreaseQuantity = (gameId) => {
    cart.increaseQuantity(gameId);
  };

  const handleDecreaseQuantity = (gameId) => {
    cart.decreaseQuantity(gameId);
  };

  const handleRemoveToCart = (gameId) => {
    cart.removeToCart(gameId);
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      setCheckedOut(false);
    }, 2000);
  };

  return (
    <div className={style.default}>
      {checkedOut && <CheckoutMessage />}
      <section>
        {quantity > 0 && (
          <div className={style.checkout}>
            <span>${cart.getAllTotalPrice()}</span>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        )}
        <ul className={style.list}>
          {quantity === 0 && <p className={style.empty}>Empty Cart</p>}
          {quantity > 0 &&
            cart.items.map((game) => (
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
                  onClick={() => handleRemoveToCart(game.id)}
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
