import style from "./button.module.css";

export default function Button({ children, onClick, variant }) {
  const VARIANT = variant === undefined ? "buttonOnDark" : variant;
  return (
    <button className={style[VARIANT]} onClick={onClick}>
      {children}
    </button>
  );
}
