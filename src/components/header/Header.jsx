import style from "./header.module.css";
import CustomLink from "../link/CustomLink";

export default function Header() {
  return (
    <header className={style.default}>
      <h1>GameBreaking</h1>
      <ul>
        <li>
          <CustomLink to="/" variant="link dark">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/shop" variant="link dark">
            Shop
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/cart" variant="link dark">
            Cart
          </CustomLink>
        </li>
      </ul>
    </header>
  );
}
