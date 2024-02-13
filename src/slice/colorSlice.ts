import { createSlice } from "@reduxjs/toolkit";

const backgroundColorSlice = createSlice({
    name: "color",
    initialState: {
        color: "white",
        backgroundColor: "black"
    },
    reducers: {
        change: (state, action) => {
            const result = {...state, color: action.payload};
            return result;
        },
        backgroundChange: (state, action) => {
            const result = {...state, backgroundColor: action.payload};
            return result;
        },
    }
});

export const {change, backgroundChange} = backgroundColorSlice.actions;

export default backgroundColorSlice;