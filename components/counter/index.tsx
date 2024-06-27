import { useCallback, useState } from "react";
import styles from "./counter.module.css";
import { Typography } from "../typography";
import classNames from "classnames";

interface CounterProps {
}

export const Counter = ({
}: CounterProps) => {
  const [count, setCount] = useState(20);

  const reduceCount = useCallback(() => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }, [count]);

  const addCount = useCallback(() => {
      setCount(prevCount => prevCount + 1);
  }, []);

  return <div className={styles.counter}>
    <div onClick={reduceCount} className={classNames(styles.button, {
      [styles[`button--reduce`]]: true
    })}>
      -
    </div>
    <div className={styles.number}>
      <Typography color="black" fontSize="140">
        {count}
      </Typography>
    </div>
    <div onClick={addCount} className={classNames(styles.button, {
      [styles[`button--add`]]: true
    })}>
      +
    </div>
  </div>;
};
