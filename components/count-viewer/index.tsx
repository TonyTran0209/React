import { useEffect } from "react";
import styles from "./count-viewer.module.css";

interface CountViewerProps {
    currentCount?: number;
}

export const CountViewer = ({
    currentCount
}: CountViewerProps) => {
    console.log("RERENDER Count Viewer", currentCount);


    return (
        <div className={styles.wrap}>
            {currentCount}
        </div>
    )
}