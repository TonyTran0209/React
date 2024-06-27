import classNames from "classnames";
import styles from "./card.module.css";

interface CardProps {
  backgroundColoring?: "white" | "red" | "brightRed";
  title: string;
  children?: React.ReactNode;
}

export const Card = ({
  backgroundColoring = "white",
  title,
  children,
}: CardProps) => {
  return (
    <div
      className={classNames(styles.wrap, {
        [styles.red]: backgroundColoring === "red",
        [styles.white]: backgroundColoring === "white",
        [styles.brightRed]: backgroundColoring === "brightRed",
      })}
    >
      <div>{children}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
