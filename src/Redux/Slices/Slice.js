import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counterSlice",
    initialState:{
        value:0
    },
    reducers:{
        increase : (state)=>{
            state.value = state.value+1
        },
        decrease : (state)=>{
            state.value = state.value-1
        },
    }
})

export const {increase,decrease} = counterSlice.actions
export default counterSlice.reducer 
