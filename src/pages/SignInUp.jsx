import React from "react";
import "./signInUp.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../Redux/Actions/userActions";
import axios from "axios";
import {BASE} from '../Api/url'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

export default function SignInUp() {

let dispatch= useDispatch()
let {SignIn, }= userActions
let { logged, name, response, success} = useSelector(state=>state.userReducer)
const navigate = useNavigate()   

//para log-in
let email= useRef()
let password= useRef()
//para sign up
let formRef= useRef()
//login
let  Login= async()=>{
  let signIn={
    email: email.current.value,
    password: password.current.value
  }
 const answer= await dispatch(SignIn(signIn))
console.log(answer.payload)
  if(answer.payload.success){
   await Swal.fire({
      background:'#151513',
      position: 'center',
      icon: 'success',
      title: `${answer.payload.response}`,
      showConfirmButton: false,
      timer: 3500
    })
    .then(()=>navigate('/')) 
  } else {
    await Swal.fire({
      background:'#151513',
      icon: 'error',
      title: 'Check the info you sent:',
      text: (`${ answer.payload.response }`),
      
     })
    }
  
}
// para sign up
 let handleSubmit=async(e)=>{
  e.preventDefault()
  let form={
    name: formRef.current.elements.name.value,
    lastName: formRef.current.elements.lastName.value,
    email: formRef.current.elements.email.value,
    photo: formRef.current.elements.photo.value,
    age: formRef.current.elements.age.value,
    password:formRef.current.elements.password.value,
  }
 
   await axios.post(`${BASE}/auth/`, form)
   .then((res=>{
 
      try{
        if (res.data.success){
          Swal.fire({
            background:'#151513',
            position: 'center',
            icon: 'success',
            title: 'Please check your email and verified your account',
            showConfirmButton: false,
            timer: 3500
          })
        }else{
          Swal.fire({
               background:'#151513',
              position: 'center',
              icon: 'error',
              title: res.data.message,
              showConfirmButton: false,
              timer: 3500
            })
        }

      }
      catch(error){
        
      }


   }))
 }

 

 return (
  <>

          <div className="full-height">

             
                <h6 className="subtitle-sign-in-ip">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
      
                <div className="card-3d-wrap ">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                    
                          <h4 className="title-sign-in-up">Log In</h4>
                    
                            <input type="email" name="email" className="form-style" placeholder="Your Email"  ref={email} required  />
                       
                            <input type="password" name="password" className="form-style" placeholder="Your Password" ref={password} required/>
                        
                          <button className="btn mt-4"  onClick={Login}> Log In </button>
                      
                        
                      </div>
                    </div>

                  {/* CARD SIGN UP */}
                    <div className="card-back">
                      <div className="center-wrap">
                        <form className="content-sign-in-up " ref={formRef}>
                          <h4 className="title-sign-in-up">Sign Up</h4>
                  
                            <input type="text" name="name" className="form-style" placeholder="Your Name"/>
                
                          <input  type="text" name="lastName" className="form-style"  placeholder="Your Last" />

                            <input type="text" name="photo" className="form-style" placeholder="Photo" />

                            <input type="number"   name="age"  className="form-style" placeholder="Age" />

                            <input type="email" name="email" className="form-style" placeholder="Your Email"/>

                            <input type="password" name="password" className="form-style" placeholder="Your Password" />

                          <button  className="btn" onClick={handleSubmit}>  Join! </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
         
  </>
);
}