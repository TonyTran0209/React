import styles from "./headline.module.css";

interface HeadlineProps {
    text?: string;
}

export const Headline = ({
    text
}: HeadlineProps) => {
    return (
        <h1 className={styles.headline}>
            {text}
        </h1>
    )
}