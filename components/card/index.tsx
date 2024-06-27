import styles from "./card.module.css";
import classNames from "classnames";

interface CardProps {
    title?: string;
    children?: React.ReactNode;
    backgroundColoring?: "white" | "red";
}

export const Card = ({
    title,
    backgroundColoring,
    children
}: CardProps) => {
    return (
        <div className={
            classNames(styles.wrap, {
                [styles.red]: backgroundColoring === "red",
                [styles.white]: backgroundColoring === "white",
            })
        }>
            <div className={styles.contentWrap}>
                {
                    children
                }
            </div>
            <div className={styles.title}>
                {
                    title
                }
            </div>
        </div>
    );
}