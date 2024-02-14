import React from "react"
import styles from "./Header.module.scss"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return(
        <div className={styles.Header}>
            <Link className={styles.home} to={"/"}>Rest Timer</Link>
                {location.pathname === "/" ? (
                    <Link className={styles.setting} to={"/setting"}>
                        <i className="fa-solid fa-gear"></i>
                    </Link>
                ) : (
                    <Link className={styles.setting} to={"/"}>
                        <i className="fa-solid fa-x"></i>
                    </Link>
                )}
        </div>
    )
}

export default Header;