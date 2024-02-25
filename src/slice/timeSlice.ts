import { createSlice } from "@reduxjs/toolkit";
import { limitValue } from "../utils/utils";

const timeSlice = createSlice({
    name: "time",
    initialState: {
        isEdit: false,
        minute: "00",
        second: "00",
        isTimeOver: false,
    },
    reducers: {
        setEdit: (state, action) => {
            return {...state, isEdit: action.payload};
        },
        setMinute: (state, action) => {
            const result = {...state, minute: limitValue(action.payload)};
            return result
        },
        setSecond: (state, action) => {
            const result = {...state, second: limitValue(action.payload)};
            return result
        },
        setTimeOver: (state, action) => {
            return {...state, isTimeOver: action.payload};
        }
    }
});

export const {setMinute, setSecond, setEdit, setTimeOver} = timeSlice.actions;
export default timeSlice;