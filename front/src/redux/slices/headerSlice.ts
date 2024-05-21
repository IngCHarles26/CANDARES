import { createSlice } from "@reduxjs/toolkit";


const headerSlice = createSlice({
  name: 'headerSlice',
  initialState: 'header',
  reducers:{
    setHeader:(_,action)=>{
      return action.payload
    }
  }
})


export const {setHeader} = headerSlice.actions;
export default headerSlice.reducer;