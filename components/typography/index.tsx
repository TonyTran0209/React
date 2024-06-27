import classNames from "classnames";
import styles from "./typography.module.css";

interface TypographyProps {
  children: React.ReactNode;
  spacingBottom?: "05" | "1" | "2" | "3" | "4" | "5";
  spacingTop?: "05" | "1" | "2" | "3" | "4" | "5";
  color?: "grey-1" | "black" | "white";
  fontSize?: "20" | "24" | "28" | "40" | "140";
}

export const Typography = ({
  children,
  spacingBottom,
  spacingTop,
  color = "grey-1",
  fontSize = "20",
}: TypographyProps) => {
  return (
    <div
      className={classNames(styles.typography, {
        [styles[`spacingBottom--${spacingBottom}`]]: !!spacingBottom,
        [styles[`spacingTop--${spacingTop}`]]: !!spacingTop,
        [styles[`color--${color}`]]: color,
        [styles[`fontSize--${fontSize}`]]: color,
      })}
    >
      {children}
    </div>
  );
};
