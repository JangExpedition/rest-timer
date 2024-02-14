import React from "react";
import styles from "./Setting.module.scss"
import Palette from "../../components/Palette/Palette.tsx";
import SetTimer from "../../components/SetTimer/SetTimer.tsx";

const Setting = () => {
    return <div className={styles.Setting}>
        <div className={styles.oneSetting}>
            <p>배경 색상 </p>
            <div>
                <Palette type={"backgroundColor"}/>
            </div>
        </div>
        <div className={styles.oneSetting}>
            <p>색상 </p>
            <div>
                <Palette type={"color"}/>
            </div>
        </div>
        <SetTimer/>
    </div>
}

export default Setting;