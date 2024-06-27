import styles from "./button.module.css";

interface ButtonProps {
    label: string;
}

export const Button = ({
    label
}: ButtonProps) => {
  return <div className={styles.button}>{label}</div>;
};
