import React from "react";
import styles from "./Setting.module.scss"
import Palette from "../../components/Palette/Palette.tsx";

const Setting = () => {
    return <div className={styles.Setting}>
        <div className={styles.oneSetting}>
            <p>배경색 : </p>
            <Palette/>
        </div>
    </div>
}

export default Setting;