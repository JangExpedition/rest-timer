import React from "react";

import styles from "./Main.module.scss"
import Timer from "../../components/Timer/Timer"

const Main = () => {
    return <div className={styles.Main}>
        <Timer/>
    </div>
}

export default Main;