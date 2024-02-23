import { configureStore } from "@reduxjs/toolkit";
import backgroundColorSlice from "../slice/colorSlice";
import timeSlice from "../slice/timeSlice";

const store = configureStore({
    reducer: {
        color: backgroundColorSlice.reducer,
        time: timeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;