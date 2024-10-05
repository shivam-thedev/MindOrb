import { createSlice } from "@reduxjs/toolkit"

const initialState={
    status:false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;

// When you define a slice using createSlice, it automatically generates action creators for each reducer you define in the reducers field. 
// These action creators are functions that return action objects used to update the Redux store.