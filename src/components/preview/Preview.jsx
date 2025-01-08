import Button from "../button/Button";
import formatData from "../../utils/formatData";
import style from "./preview.module.css";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export default function Preview({ data, handleClose }) {
  const game = formatData(data);
  const screenShots = [
    game.screenShots[1],
    game.screenShots[2],
    game.screenShots[3],
    game.screenShots[4],
  ];

  return (
    <div className={style.default}>
      <section className={style.heading} role="heading">
        <h4 className={style.title}>{game.title}</h4>
        <div className={style.buttonDiv}>
          <span className={style.ratings}>{game.esrbRating.name}</span>
          <Button>Add To Cart</Button>
        </div>
      </section>
      <section className={style.imageSection}>
        <div
          className={style.bgImage}
          style={{ backgroundImage: `url(${game.bgImage})` }}
        ></div>
        <div className={style.screenshots}>
          {screenShots.map((img, i) => (
            <div
              key={i}
              className={style.screenShot}
              style={{ backgroundImage: `url(${img.image})` }}
            ></div>
          ))}
        </div>
      </section>

      <div class={style.bottomButton}>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </div>
  );
}
