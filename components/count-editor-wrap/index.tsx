import { useState } from "react";
import styles from "./count-editor-wrap.module.css";
import { CountViewer } from "../count-viewer"
import { CountButton } from "../count-button";
import classNames from "classnames";

export const CountEditorWrap = () => {
    const [count, setCount] = useState(0);

    console.log("RERENDER", count);

    const subtractFromCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const addToCount = () => {
        setCount(count + 1);
    }

    return (
        <div className={styles.wrap}>
            <div className={classNames(styles.button, styles.buttonLeft)}>
                <CountButton onClick={subtractFromCount} type="subtraction" />
            </div>
            <CountViewer currentCount={count} />
            <div className={classNames(styles.button, styles.buttonRight)}>
                <CountButton onClick={addToCount} type="addition" />
            </div>
        </div>
    )
}