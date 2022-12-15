import { createReducer } from '@reduxjs/toolkit'
import userActions from '../Actions/userActions'
const { SignIn, logWithToken, logOut } = userActions

const InitialState = {
    id: '',
    name: '',
    lastName: '',
    photo: '',
    logged: false,
    token: '',
    role: '',
    response: []
}
const userReducer = createReducer(InitialState,
    (builder) => {
        builder
            .addCase(SignIn.fulfilled, (state, action) => {
               
                let success = action.payload.success
                if (success) {
                    let user = action.payload.user
                    let token = action.payload.token
                   
                    localStorage.setItem('token', JSON.stringify({ token: { user: token } }))
                    let newState = {
                        ...state,
                        id: user.id,
                        name: user.name,
                        lastName: user.lastName,
                        photo: user.photo,
                        logged: true,
                        token: token,
                        role: user.role
                    }

                   
                    return newState
                } else {
                    let newState = {
                        ...state,
                        response: action.payload.response
                    }
                    return newState
                }
            })
            .addCase(logWithToken.fulfilled, (state, action) => {
                //  console.log(action.payload);
                const { success, user, token } = action.payload
                if (success) {
                    // const user=action.payload.user


                    // let { token } = response
                    let newState = {
                        ...state,
                        name: user.name,
                        photo: user.photo,
                        logged: true,
                        token: token,
                        id: user.id,
                        role: user.role
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        response: action.payload.response
                    }
                    return newState
                }
            })
            .addCase(logOut.fulfilled,(state,action)=>{
                console.log(action.payload);
                const { success, response } = action.payload
                if(success){
                    localStorage.removeItem('token')
                    let newState = {
                        ...state,
                        _id: '',
                        name: '',
                        lastName: '',
                        photo: '',
                        logged: false,
                        token: ''
                    }
                    return newState
                }else{
                    let newState = {
                        ...state,
                       response: response
                    }
                    return newState
                }
            })



    })
export default userReducer            