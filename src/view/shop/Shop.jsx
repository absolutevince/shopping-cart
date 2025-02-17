import { useContext, useState, useEffect } from "react";
import style from "./shop.module.css";
import formatData from "../../utils/formatData";
import GamesContext from "../../hooks/gamesContext";
import CartContext from "../../hooks/cartContext";
import Card from "../../components/card/Card";
import Preview from "../../components/preview/Preview";
import Loading from "../../components/loading/Loading";
import PopupMessage from "../../components/popup-message/PopupMessage";

export default function Shop() {
  // TODO: Add page navigation
  const { state: games, changePage } = useContext(GamesContext);
  const cart = useContext(CartContext);
  const [preview, setPreview] = useState({ modalOpen: false, game: null });
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handlePreview = (game) => {
    setPreview({ modalOpen: true, game: game });
  };

  const handleClose = () => {
    setPreview({ modalOpen: false, game: null });
  };

  const handleAddToCart = (item) => {
    cart.addToCart(formatData(item));

    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  useEffect(() => {
    cart.closePopupCart();
  }, []);

  return (
    <div className={style.default}>
      {isAddedToCart && <PopupMessage message="Added to cart" />}
      {preview.modalOpen && (
        <Preview
          data={preview.game}
          handleAddToCart={() => handleAddToCart(preview.game)}
          handleClose={handleClose}
        />
      )}
      <section className={style.games}>
        {games.isLoading === true && <Loading />}
        {games.isLoading === false &&
          games.error === null &&
          games.data.results.map((game) => (
            <Card
              key={game.id}
              data={game}
              handlePreview={() => handlePreview(game)}
            />
          ))}
      </section>
    </div>
  );
}
