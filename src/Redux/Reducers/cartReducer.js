import {createReducer} from '@reduxjs/toolkit'
import cartActions from '../Actions/cartActions';

const {getCart} = cartActions
const initialState = {
    products: []
};


const cartReducer = createReducer(initialState,(builder) =>{
    builder
        .addCase(getCart,(state,action)=>{

            return {
                ...state
            }
        })
})

export default cartReducer