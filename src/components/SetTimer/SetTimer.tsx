import React from "react";
import styles from "./SetTimer.module.scss"
import { useDispatch } from "react-redux";
import { setMinute, setSecond } from "../../slice/timeSlice";

const SetTimer = () => {
    const dispatch = useDispatch();

    const timeHandler = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;

        let value = Number(target.value);
        const id = target.id;

        if(value < 0){
            value = 0;
            target.value = String(value);
        }else if(value > 59){
            value = 59;
            target.value = String(value);
        }

        if(id === "minute"){
            dispatch(setMinute(value));
        }else{
            dispatch(setSecond(value));
        }
    }

    return <div className={styles.SetTimer}>
        <p>시간 </p>
        <div>
            <input id="minute" type="number" onChange={(e)=>timeHandler(e)}></input>분
            <input id="second" type="number" onChange={(e)=>timeHandler(e)}></input>초
        </div>
    </div>
}

export default SetTimer;