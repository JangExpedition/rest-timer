import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeTimerString } from "../../utils/utils";
import { setMinute, setSecond, setTimeOver } from "../../slice/timeSlice";

const Timer = () => {

    const dispatch = useDispatch();

    const storeMinute = useSelector((state: RootState)=>state.time.minute);
    const storeSecond = useSelector((state: RootState)=>state.time.second);
    const isEdit = useSelector((state: RootState)=>state.time.isEdit);

    const [displayMin, setDisplayMin] = useState("");
    const [displaySec, setDisplaySec] = useState("");
    const [isStart, setIsStart] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | number>(0);

    useEffect(()=>{
        setDisplayMin(storeMinute);
        setDisplaySec(storeSecond);
    }, [storeMinute, storeSecond]);

    const timerHandler = () => {
        if(isStart){
            setIsStart(false);
            clearInterval(timerId!);
        }else{
            setIsStart(true);
            const id = timer();
            setTimerId(id);
        }
    }

    const timer = () => {
        let isReverse = false;
        dispatch(setTimeOver(isReverse));

        return setInterval(()=>{
            setDisplaySec((prevSecond)=>{
                if(isReverse){
                    if(prevSecond === "59"){
                        setDisplayMin(changeTimerString(Number(displayMin) + 1));
                        return "00";
                    }else{
                        return changeTimerString(Number(prevSecond) + 1);
                    }
                }else{
                    if(prevSecond === "00"){
                        if(displayMin === "00"){
                            isReverse = true;
                            dispatch(setTimeOver(isReverse));
                            return "01";
                        }else{
                            setDisplayMin(changeTimerString(Number(displayMin) - 1));
                            return "59";
                        }
                    }else{
                        return changeTimerString(Number(prevSecond) - 1);
                    }
                }
            })
        }, 1000)
    };

    const resetTimer = () => {
        setDisplayMin(storeMinute);
        setDisplaySec(storeSecond);
        setIsStart(false);
        dispatch(setTimeOver(false));
        clearInterval(timerId!);
    }

    const editTime = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        let value = Number(target.value);
        const id = target.id;

        if(isNaN(value)){
            return;
        }

        if(id === "minute"){
            dispatch(setMinute(value));
        }else{
            dispatch(setSecond(value));
        }
    }

    return <div className={styles.Timer}>
        <div className={styles.timeWrapper}>
            <input id="minute" type="text" onChange={(e)=>editTime(e)} value={isEdit ? storeMinute : displayMin} readOnly={!isEdit}></input>
                :
                <input id="second" type="text" onChange={(e)=>editTime(e)} value={isEdit ? storeSecond : displaySec} readOnly={!isEdit}></input>
        </div>
        <div className={styles.buttonWrapper}>
            <div className={styles.stopBtn} 
                    onClick={()=>{resetTimer()}}>정지</div>
            <div className={`${styles.startBtn} ${isStart ? styles.start : ""}`} 
                    onClick={()=>{timerHandler()}}>
                {isStart ? "일시 정지" : "시작"}
            </div>
        </div>
    </div>
}

export default Timer;