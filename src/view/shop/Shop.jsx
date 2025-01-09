import { useContext, useEffect, useState } from "react";
import style from "./shop.module.css";
import GamesContext from "../../hooks/gamesContext";
import CartContext from "../../hooks/cartContext";
import Card from "../../components/card/Card";
import Preview from "../../components/preview/Preview";

export default function Shop() {
  // TODO: Add page navigation
  const { state: games, changePage } = useContext(GamesContext);
  const cart = useContext(CartContext);
  const [preview, setPreview] = useState({ modalOpen: false, game: null });

  const handlePreview = (game) => {
    setPreview({ modalOpen: true, game: game });
  };

  const handleClose = () => {
    setPreview({ modalOpen: false, game: null });
  };

  const handleAddToCart = (itemId) => {
    cart.addToCart(itemId);
  };

  return (
    <div className={style.default}>
      {preview.modalOpen && (
        <Preview
          data={preview.game}
          handleAddToCart={() => handleAddToCart(preview.game.id)}
          handleClose={handleClose}
        />
      )}
      <section className={style.games}>
        {games.isLoading && <p>Loading...</p>}
        {games.isLoading === false &&
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
