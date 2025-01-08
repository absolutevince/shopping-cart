import { useContext } from "react";
import style from "./shop.module.css";
import GamesContext from "../../hooks/gamesContext";
import Card from "../../components/card/Card";

export default function Shop() {
  const { state: games, changePage } = useContext(GamesContext);

  return (
    <div className={style.default}>
      <section className={style.games}>
        {games.isLoading && <p>Loading...</p>}
        {games.isLoading === false &&
          games.data.results.map((game) => <Card key={game.id} data={game} />)}
      </section>
    </div>
  );
}
