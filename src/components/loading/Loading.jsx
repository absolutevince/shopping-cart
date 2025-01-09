import style from "./loading.module.css";

export default function Loading() {
	return (
		<div className={style.default}>
			<span>Loading</span>
			<div className={style.dot}></div>
		</div>
	);
}
