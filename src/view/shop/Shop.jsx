import { useContext } from "react";
import GamesContext from "../../hooks/gamesContext";

export default function Shop() {
  const gamesList = useContext(GamesContext);

  return (
    <>
      <h1>Shop</h1>
    </>
  );
}
