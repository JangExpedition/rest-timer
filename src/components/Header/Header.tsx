import React from "react"
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className={styles.Header}>
            <Link className={styles.home} to={"/"}>Rest Timer</Link>
            <Link className={styles.setting} to={"/setting"}></Link>
        </div>
    )
}

export default Header;