import React from "react";
import { useDispatch } from "react-redux";
import { setMinute, setSecond } from "../../slice/timeSlice.ts";

const SetTimer = () => {
    const dispatch = useDispatch();

    const timeHandler = (e) => {
        let value = e.target.value;
        const id = e.target.id;

        if(value < 0){
            value = 0;
            e.target.value = value;
        }else if(value > 59){
            value = 59;
            e.target.value = value;
        }

        if(id === "minute"){
            dispatch(setMinute(value));
        }else{
            dispatch(setSecond(value));
        }
    }

    return <div>
        <p>시간 : </p>
        <input id="minute" type="number" onChange={(e)=>timeHandler(e)}></input>분
        <input id="second" type="number" onChange={(e)=>timeHandler(e)}></input>초
    </div>
}

export default SetTimer;