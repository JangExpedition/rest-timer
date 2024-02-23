import { createSlice } from "@reduxjs/toolkit";
import { changeTimerString } from "../../src/utils/utils";

const timeSlice = createSlice({
    name: "time",
    initialState: {
        minute: "00",
        second: "00",
    },
    reducers: {
        setMinute: (state, action) => {
            const minute = changeTimerString(action.payload);
            const result = {...state, minute};
            return result
        },
        setSecond: (state, action) => {
            const second = changeTimerString(action.payload);
            const result = {...state, second};
            return result
        },
    }
});

export const {setMinute, setSecond} = timeSlice.actions;
export default timeSlice;