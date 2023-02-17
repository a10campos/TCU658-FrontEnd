import { configureStore } from "@reduxjs/toolkit"
import { scoreSlice } from "./slices/Score"
export const store = configureStore({
    reducer: {
        score: scoreSlice.reducer
    },
})