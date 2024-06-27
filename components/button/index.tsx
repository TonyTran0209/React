import styles from "./button.module.css";

interface IButton {
    label?: string
}

export const Button = ({
    label
}: IButton) => {
    return (
        <input className={styles.button}
            type={"button"} value={label} />
    )
}
