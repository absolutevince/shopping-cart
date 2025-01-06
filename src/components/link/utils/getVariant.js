import style from "../customLink.module.css";

export default function getVariant(variant) {
  const categories = {
    button: {
      light: style.linkAsButtonOnLight,
      dark: style.linkAsButtonOnDark,
    },
    link: {
      light: style.linkOnLight,
      dark: style.linkOnDark,
    },
  };
  const baseName = variant.split(" ")[0];
  const subName = variant.split(" ")[1];
  return categories[baseName][subName];
}
