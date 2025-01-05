import "./styles/reset.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import globalcss from "./styles/global.module.css";

function App() {
  return (
    <div className={`${globalcss.root}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
