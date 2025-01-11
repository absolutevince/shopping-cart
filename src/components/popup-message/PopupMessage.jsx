import { useState } from "react";
import style from "./popupMessage.module.css";

export default function PopupMessage({ message }) {
	return (
		<div className={style.default}>
			<p>{message}</p>
		</div>
	);
}
