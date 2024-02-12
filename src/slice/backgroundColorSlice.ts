import { createSlice } from "@reduxjs/toolkit";

const backgroundColorSlice = createSlice({
    name: "backgroundColor",
    initialState: {
        color: "black"
    },
    reducers: {
        change: (state, action) => {
            const result = {...state, color: action.payload};
            return result;
        }
    }
})

export const {change} = backgroundColorSlice.actions;

export default backgroundColorSlice;