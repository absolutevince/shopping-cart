import { useState, useEffect } from "react";
import "./styles/reset.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import globalcss from "./styles/global.module.css";
import getGamesList from "./api/getGamesList.js"

function App() {
  const [gamesList, setGamesList] = useState()

  useEffect(()=> {
  const get = async() => {
      const data = await getGamesList()
      setGamesList(data)
    }

    get()
  }, [])


  return (
    <div data-testid="app" className={globalcss.root}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
