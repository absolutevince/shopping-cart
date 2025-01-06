import style from "./home.module.css";
import CustomLink from "../../components/link/CustomLink";

export default function Home() {
  return (
    <div className={style.default}>
      <section>
        <h2>Welcome to the best Video games store on the internet</h2>
        <p>Get the latest and the best video games on market</p>
        <CustomLink to="/shop" variant="button dark">
          Shop Now
        </CustomLink>
      </section>
    </div>
  );
}
