import { useContext, useEffect } from "react";
import style from "./home.module.css";
import CustomLink from "../../components/link/CustomLink";
import CartContext from "../../hooks/cartContext";

export default function Home() {
  const { closePopupCart } = useContext(CartContext);

  useEffect(() => {
    closePopupCart();
  }, []);
  return (
    <div className={style.default}>
      <section>
        <h2>Welcome to the best Video games store on the internet</h2>
        <p>Get the latest and the best video games on market</p>
        <CustomLink to="/shop" variant="linkAsButtonOnDark">
          Shop Now
        </CustomLink>
      </section>
    </div>
  );
}
