import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setMinute, setSecond } from "../../slice/timeSlice.ts";
import { backgroundChange, change } from "../../slice/colorSlice.ts";

const Timer = () => {

    const storeMinute = useSelector((state: RootState)=>state.time.minute);
    const storeSecond = useSelector((state: RootState)=>state.time.second);
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const color = useSelector((state: RootState)=>state.color.backgroundColor);
    const backgroundColor = useSelector((state: RootState)=>state.color.color);
    const dispatch = useDispatch();
    const [timerId, setTimerId] = useState<NodeJS.Timeout | number>(0);

    useEffect(()=>{
        setMinute(storeMinute);
        setSecond(storeSecond);
    }, []);

    const timerHandler = (e: React.MouseEvent) => {
        const target = e.target as HTMLDivElement;
        const state = target.innerText;
        
        if(state === "시작"){
            target.innerText = "일시 정지";
            const id = timer();
            setTimerId(id);
        }else{
            target.innerText = "시작";
            clearInterval(timerId!);
        }
    }

    const timer = () => {

        let isReverse = false;

        return setInterval(()=>{
            setSecond((prevSecond)=>{
                if(isReverse){
                    if(prevSecond === "59"){
                        setMinute(String(Number(minute) + 1).padStart(2, "0"));
                        return "00";
                    }else{
                        return String(Number(prevSecond) + 1).padStart(2, "0");
                    }
                }else{
                    if(prevSecond === "00"){
                        if(minute === "00"){
                            dispatch(change(color));
                            dispatch(backgroundChange(backgroundColor));
                            isReverse = true;
                            return "01";
                        }else{
                            setMinute(String(Number(minute) - 1).padStart(2, "0"));
                            return "59";
                        }
                    }else{
                        const num = Number(prevSecond) - 1;
                        return String(num).padStart(2, "0");
                    }
                }
            })
        }, 1000)
    };

    const resetTimer = () => {
        setMinute(storeMinute);
        setSecond(storeSecond);
        dispatch(backgroundChange(backgroundColor));
        dispatch(change(color))
        clearInterval(timerId!);
    }

    return <div className={styles.Timer}>
        <h1 className={styles.time}>{minute} : {second}</h1>
        <div className={styles.buttonWrapper}>
            <div className={styles.startAndStop} style={{backgroundColor, color}} onClick={(e)=>{timerHandler(e)}}>시작</div>
            <div className={styles.startAndStop} style={{backgroundColor, color}} onClick={()=>{resetTimer()}}>정지</div>
        </div>
    </div>
}

export default Timer;