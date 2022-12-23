import { createAsyncThunk } from "@reduxjs/toolkit";

const SaveFav= createAsyncThunk('saveFav', async(data)=>{
    
  
    return{
       fav: data
    }
});
const unFav= createAsyncThunk('unFav', async(data)=>{
 
    return{
        fav: data
       
    }
})

const favsActions = {SaveFav, unFav }

export default favsActions;