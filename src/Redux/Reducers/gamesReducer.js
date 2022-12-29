import {createReducer} from '@reduxjs/toolkit'
import gamesActions from '../Actions/gamesActions'

const {getGame,filterGame,filterGameInput}=gamesActions
const initialState = {
    game:[],
    bestGame:[]
};

const gamesReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase(getGame.fulfilled,(state,action)=>{
        return{
            ...state,
            game:action.payload
        }
    })
    .addCase(filterGame.fulfilled,(state,action)=>{
        return {
            ...state,
            bestGame:action.payload
        }
    })
    .addCase(filterGameInput.fulfilled, (state, action) => {
        console.log(action.payload)
        return{ 
            ...state,
            ...action.payload
        }
    })
})
export default gamesReducer