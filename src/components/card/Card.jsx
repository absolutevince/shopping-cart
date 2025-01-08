import formatData from "../../utils/formatData";
import style from "./card.module.css";

export default function Card({ data, handlePreview }) {
  const game = formatData(data);

  return (
    <article className={style.default} onClick={handlePreview}>
      <div
        className={style.bgImage}
        style={{ backgroundImage: `url(${game.bgImage})` }}
      ></div>
      <div className={style.title}>
        <h3>{game.title}</h3>
      </div>
    </article>
  );
}
