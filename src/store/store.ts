import { configureStore } from "@reduxjs/toolkit";
import backgroundColorSlice from "../slice/backgroundColorSlice.ts";

const store = configureStore({
    reducer: {
        backgroundColor: backgroundColorSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;