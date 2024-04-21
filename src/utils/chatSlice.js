import {createSlice} from "@reduxjs/toolkit";

const chatSlice=createSlice({
   name:"chat",
   initialState:{
    messages:[]
   },
   reducers:{
    addMessage:(state,action)=>{
        state.messages.splice(30,1); 
        state.messages.push(action.payload);
    },
   },
});

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer; 