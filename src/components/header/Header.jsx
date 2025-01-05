import { Link } from "react-router-dom";
import css from "./header.module.css";

export default function Header() {
	return (
		<header className={`${css.default}`}>
			<h1>GameBreaking</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</header>
	);
}
