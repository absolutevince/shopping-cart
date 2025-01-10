import { useContext } from "react";
import CartContext from "../../hooks/cartContext";
import CustomLink from "../link/CustomLink";
import Button from "../button/Button";
import style from "./popupCart.module.css";

export default function PopupCart() {
	const { items, closePopupCart } = useContext(CartContext);

	return (
		<div className={style.default}>
			{items.length === 0 && <span>You have not added games to cart</span>}
			<ul className={style.list}>
				{items.length > 0 &&
					items.map((game) => (
						<li className={style.item} key={game.id}>
							<div>
								<h3>{game.title}</h3>
							</div>
							<span>{game.quantity}x</span>
						</li>
					))}
			</ul>
			<div className={style.buttons}>
				<CustomLink variant="linkAsButtonOnDark" to={"/cart"}>
					View Cart
				</CustomLink>
				<Button variant="buttonError" onClick={() => closePopupCart()}>
					Close
				</Button>
			</div>
		</div>
	);
}
