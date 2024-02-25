import React from "react"
import styles from "./Footer.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { setEdit } from "../../slice/timeSlice"

const Footer = () => {

    const isEdit = useSelector((state: RootState)=>state.time.isEdit);
    const dispatch = useDispatch();

    return <div className={styles.Footer}>
        <div className={!isEdit ? `${styles.active}` : "" } onClick={()=>dispatch(setEdit(false))}>
            <i className="fa-regular fa-clock"></i>
            <span>타이머</span>
        </div>
        <div className={isEdit ? `${styles.active}` : "" } onClick={()=>dispatch(setEdit(true))}>
            <i className="fa-solid fa-gear"></i>
            <span>편집</span>
        </div>
    </div>
}

export default Footer;