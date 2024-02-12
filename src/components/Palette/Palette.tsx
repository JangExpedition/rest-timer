import React from "react";
import styles from "./Palette.module.scss"
import { useDispatch } from "react-redux";
import { change } from "../../slice/backgroundColorSlice.ts";

const paletteColor = ["black", "white", "red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const Palette = () => {

    const dispatch = useDispatch();

    return <div className={styles.Palette}>
        {paletteColor.map(color=>(
            <span key={color} 
                className={styles[`${color}`]} 
                onClick={()=>dispatch(change(color))}></span>
        ))}
    </div>
}

export default Palette;