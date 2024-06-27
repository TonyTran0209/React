import styles from "./count-button.module.css";

interface CountButtonProps {
  type: "subtraction" | "addition";
  onClick?: () => void;
}

export const CountButton = ({ type, onClick }: CountButtonProps) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {type === "addition" ? "+" : "-"}
    </div>
  );
};
