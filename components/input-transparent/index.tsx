import styles from "./input-transparent.module.css";

export const InputTransparent = () => {
  return (
    <div>
      <input
        className={styles.input}
        placeholder={"Your input"}
        type={"text"}
      />
    </div>
  );
};
