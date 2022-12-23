import { createReducer } from "@reduxjs/toolkit";
import favsActions from '../Actions/favsActions';

const {SaveFav, unFav}= favsActions

const InitialState= {
    favorite: []
}

const favsReducer = createReducer(InitialState, (builder)=>{
    builder
                .addCase(SaveFav.fulfilled, (state,action)=>{
                    
                     let newState= state.favorite.concat(action.payload.fav)
                    
                    return{
                        ...state,
                       favorite: newState
                    }
                    
                       
                  
                })
                .addCase(unFav.fulfilled, (state, action)=>{
                    console.log(action.payload)
                    if(action.payload.success){
                        let newState={
                            ...state,
                        }
                        newState[action.payload.user]=newState[action.payload.user].filter(game=> game._id !== action.payload.fav) 
                    }
                })

    });
    export default favsReducer;