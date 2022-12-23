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
                    console.log(action.payload.fav)
                    let newState= state.favorite.filter(game=> game._id !== action.payload.fav._id) 
                    
                    return{
                        ...state,
                       favorite: newState
                    }
                   
                   
                })

    });
    export default favsReducer;