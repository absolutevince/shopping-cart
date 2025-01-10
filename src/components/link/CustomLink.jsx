import { Link } from "react-router-dom";
import style from "./customLink.module.css";

export default function CustomLink({ to, children, variant }) {
  const VARIANT = variant === undefined ? "LinkOnDark" : variant;
  return (
    <Link to={to} className={style[VARIANT]}>
      {children}
    </Link>
  );
}
