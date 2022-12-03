import { createSlice } from "@reduxjs/toolkit";

const dashboardReducer = createSlice({
    name : 'dashboardReducer',
    initialState : {
        display : ''
    },
    reducers : {
        setDisplay : (state, action)=>{
            state.display = action.payload
        }
    }
})

export const {setDisplay} = dashboardReducer.actions;
export default dashboardReducer.reducer;