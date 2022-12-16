import {createReducer} from '@reduxjs/toolkit'
import gameActions from '../Actions/gamesActions'

const {getGame,filterGame,filterSearch}=gameActions
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
        console.log(action.payload);
        return {
            ...state,
            bestGame:action.payload.splice(0,4)
        }
    })
    .addCase(filterSearch.fulfilled,(state, action) => {
        return{
            ...state,
            game:action.payload
        }
    })
})
export default gamesReducer