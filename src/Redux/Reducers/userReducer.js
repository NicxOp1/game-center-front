import {createReducer} from '@reduxjs/toolkit'
import userActions from '../Actions/userActions'
 const { SignIn, logWithToken } = userActions

const InitialState={
id: '',
name: '',
lastName: '',
photo: '',
logged: false,
token: '',
role: ''

}
const userReducer = createReducer(InitialState, 
    (builder)=>{
        builder
            .addCase(SignIn.fulfilled, (state,action)=>{
             let success= action.payload.success
                console.log(action.payload.user)
            
                if (success){
                    let user= action.payload.user
                    let token= action.payload.token 
                    localStorage.setItem('token', JSON.stringify({token: {user:token}}))
                    let newState ={
                        ...state,
                        id: user.id,
                        name: user.name,
                        lastName: user.lastName,
                        photo: user.photo,
                        logged: true,
                        token: token,
                        role: user.role
                    }
                    console.log(newState);
                    return newState
                }else {
                    let newState={
                        ...state,
                         message: action.payload.success
                    }
                    return newState
                }
            })
            .addCase(logWithToken.fulfilled, (state, action) => {


                const { success, user } = action.payload
                if (success) {
                    // const user=action.payload.user
                    
                  
                    // let { token } = response
                    let newState = {
                        ...state,
                        name: user.name,
                        photo: user.photo,
                        logged: true,
                        token: user.token,
                        id: user.id,
                        role: user.role
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        mensaje: action.payload.response
                    }
                    return newState
                }
            })


            
    })
    export default userReducer            