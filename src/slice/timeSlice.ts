import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
    name: "time",
    initialState: {
        minute: "00",
        second: "00",
    },
    reducers: {
        setMinute: (state, action) => {
            const minute = String(action.payload).padStart(2, "0");
            const result = {...state, minute};
            return result
        },
        setSecond: (state, action) => {
            const second = String(action.payload).padStart(2, "0");
            const result = {...state, second};
            return result
        },
    }
});

export const {setMinute, setSecond} = timeSlice.actions;
export default timeSlice;