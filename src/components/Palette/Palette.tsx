import React from "react";
import styles from "./Palette.module.scss"
import { useDispatch } from "react-redux";
import { backgroundChange, change } from "../../slice/colorSlice.ts";

const paletteColor = ["black", "white", "red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const Palette = ({type}) => {

    const dispatch = useDispatch();
    const clickHandler = (color) => {
        type === "color" ? dispatch(change(color)) : dispatch(backgroundChange(color));
    }

    return <div className={styles.Palette}>
        {paletteColor.map(color=>(
            <span key={color} 
                className={styles[`${color}`]} 
                onClick={()=>clickHandler(color)}
                ></span>
        ))}
    </div>
}

export default Palette;