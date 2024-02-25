import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "../slice/timeSlice";

const store = configureStore({
    reducer: {
        time: timeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;