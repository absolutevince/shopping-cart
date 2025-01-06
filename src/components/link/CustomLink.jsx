import { Link } from "react-router-dom";
import getVariant from "./utils/getVariant";

export default function CustomLink({ to, children, variant }) {
  return (
    <Link to={to} className={getVariant(variant)}>
      {children}
    </Link>
  );
}
