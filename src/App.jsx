import { useState, useEffect } from "react";
import "./styles/reset.css";
import globalcss from "./styles/global.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import GamesContext from "./hooks/gamesContext.jsx";
import useGames from "./hooks/useGames.jsx";

function App() {
  const games = useGames();

  return (
    <div data-testid="app" className={globalcss.root}>
      <Header />
      <GamesContext.Provider value={games}>
        <Outlet />
      </GamesContext.Provider>
    </div>
  );
}

export default App;
