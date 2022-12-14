import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE} from '../../Api/url'


const SignIn= createAsyncThunk('SignIn', async(form)=>{
  

    try{
        let res= await axios.post(`${BASE}/auth/signin`, form)
        let user= res.data.response
        console.log(user);
        return{
            success:true,
            user: user.userToken,
            token: user.token,
        }

    }
    catch(error){
       return{
        success: false,
        response: error.data.response
       }
    }
})
// const SignUp=createAsyncThunk('SignUp', async(form)=>{
//     console.log(form)

//     try{
//         let newUser= await axios.post(`${BASE}/register`, form)
//         console.log(newUser);
//         return{
//             success:true,
            
//         }

//     }
//     catch(error){
//        return{
//         success: false,
//         response: error.data.response
//        }
//     }
// })
const logWithToken=  createAsyncThunk('logWithToken', async(token)=>{
    console.log(token)
    let headers= {headers: {'Authorization': `Bearer ${token}`}}

    try{
        let user= await axios.post(`${BASE}/auth/token`, null,headers)
        console.log(user)
        return{
            success:true,
            user: user.response.user

        }
    }
    catch(error){
        console.log(error)
        return{
            success: false,
            response: error.message
        }
    }

})

const logOut= createAsyncThunk('logOut', async()=>{
    
})

const userActions={ SignIn, logWithToken, logOut}

export default userActions