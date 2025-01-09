import { useState, useEffect } from "react";
import "./styles/reset.css";
import globalcss from "./styles/global.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import GamesContext from "./hooks/gamesContext.jsx";
import CartContext from "./hooks/cartContext.jsx";
import useGames from "./hooks/useGames.jsx";
import useCart from "./hooks/useCart.jsx";

function App() {
  const games = useGames();
  const cart = useCart();

  return (
    <div data-testid="app" className={globalcss.root}>
      <Header />
      <GamesContext.Provider value={games}>
        <CartContext.Provider value={cart}>
          <Outlet />
        </CartContext.Provider>
      </GamesContext.Provider>
    </div>
  );
}

export default App;
