import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice ({
    name: 'score',
    initialState: {
        score:0
    },
    reducers: {
        increment: (state) => {
            state.score += 1;
        }
    }
})

export const {increment } = scoreSlice.actions