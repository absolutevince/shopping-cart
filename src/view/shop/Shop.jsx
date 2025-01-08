import { useContext, useEffect, useState } from "react";
import style from "./shop.module.css";
import GamesContext from "../../hooks/gamesContext";
import Card from "../../components/card/Card";
import Preview from "../../components/preview/Preview";

export default function Shop() {
  const { state: games, changePage } = useContext(GamesContext);
  const [preview, setPreview] = useState({ modalOpen: false, game: null });

  const handlePreview = (game) => {
    setPreview({ modalOpen: true, game: game });
  };

  const handleClose = () => {
    setPreview({ modalOpen: false, game: null });
  };

  return (
    <div className={style.default}>
      {preview.modalOpen && (
        <Preview data={preview.game} handleClose={handleClose} />
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
