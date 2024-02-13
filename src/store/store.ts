import { configureStore } from "@reduxjs/toolkit";
import backgroundColorSlice from "../slice/colorSlice.ts";
import timeSlice from "../slice/timeSlice.ts";

const store = configureStore({
    reducer: {
        color: backgroundColorSlice.reducer,
        time: timeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;