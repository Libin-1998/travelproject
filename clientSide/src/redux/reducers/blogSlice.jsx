import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    blog:[],
    status:'idle',
}

const token = sessionStorage.getItem("token");

export const getBlog=createAsyncThunk('blog/get',async()=>{
const datas=await axios.get('https://travelproject-2.onrender.com/api/blog/viewData',{
    headers:{Authorization:`Bearer ${token}`},

}) 
const result =datas.data.data;
console.log(result);
return result;
  })
  


export const blogSlice = createSlice({

    name:'blogs',
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(getBlog.pending,(state,action)=>{
            state.status='Loading';
        })
        .addCase(getBlog.fulfilled,(state,action)=>{
            state.status='idle';
            state.blog=action.payload;
        })
        .addCase(getBlog.rejected,(state,action)=>{
            state.status='error';
        })
    },
})


export default blogSlice.reducer;
