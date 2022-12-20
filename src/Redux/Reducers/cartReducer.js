import {createReducer} from '@reduxjs/toolkit'
import cartActions from '../Actions/cartActions';

const {addGame,plus,remove,deleteProduct} = cartActions
const initialState = {
    products: [{
        name: "God of War",
        price: 35,
        unity: 3,
    }],
    newProducts: []
};


const cartReducer = createReducer(initialState,(builder) =>{
    builder
        .addCase(addGame,(state,action)=>{

            let newProduct = state.products.concat(action.payload)

            return {
                ...state,
                products: newProduct
            }
        })
        .addCase(plus,(state,action)=>{
            let arrayState = state.products.filter(e => e.name !== action.payload.name)
            let arrayProducts = state.products.filter(e => e.name === action.payload.name)
            
            if (arrayProducts.length > 0) {
                
                arrayProducts[0] = {...arrayProducts[0],
                    unity: arrayProducts[0].unity + 1
                }

                arrayState = arrayState.concat(arrayProducts[0])

                return{
                    ...state,
                    products:arrayState
                }
            }else{
                console.log("no anda");
            }
            
        })
        .addCase(remove,(state,action)=>{
            let arrayState = state.products.filter(e => e.name !== action.payload.name)
            let arrayProducts = state.products.filter(e => e.name === action.payload.name)
            
            if (arrayProducts.length > 0) {
                
                arrayProducts[0] = {...arrayProducts[0],
                    unity: arrayProducts[0].unity - 1
                }
                if (arrayProducts[0].unity === 0) {
                    return{
                        ...state,
                        products:arrayState
                    }
                }
                arrayState = arrayState.concat(arrayProducts[0])

                return{
                    ...state,
                    products:arrayState
                }
            }else{
                console.log("no anda");
            }
        })
        .addCase(deleteProduct,(state,action)=>{
            let arrayState = state.products.filter(e => e.name !== action.payload.name)

            return{
                ...state,
                products: arrayState
            }
        })
})

export default cartReducer