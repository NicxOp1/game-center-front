import React from "react";
import "./signInUp.css";
import { useRef, useState } from "react";
import { useDispatch} from "react-redux";
import userActions from "../../Redux/Actions/userActions";
import axios from "axios";
import {BASE} from '../../Api/url'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import Switch from "../Switch/Switch";

export default function SignInUp() {

let dispatch= useDispatch()
let {SignIn, }= userActions
const navigate = useNavigate()  

let [flip, setFlip]=useState(false)

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
              timer: 5000
            })
        }

      }
      catch(error){
        Swal.fire({
          icon: 'error',
          title: 'Error, the user email, it´s already exist',
          text: 'Try again with a new email.',
        })     
      }


   }))
 }

 

 return (
   <div className='full-height'>
    <div className="content">

      <Switch isOn={flip} onColor="linear-gradient(135deg, #D465D8 10%, #7e03aaff 100%)" handleToggle={() => setFlip(!flip)}/>
    

           <form className={`card ${flip ? 'flip': ''}`}>
              
              <>   
              <div className='front'>
                <h4>Log In</h4>
                    <input type="email" name="email" placeholder="Email"  ref={email} required  />
                       
                       <input type="password" name="password"  placeholder=" Password" ref={password} required/>
                             
                      <button className='btn' onClick={Login}> Log In </button>

                    </div>
              
                </> 
                      <>
                      <div className="back" >
                          <h4 >Sign Up</h4>
                          <form className="sign-up" ref={formRef}>
                  <input type="text" name="name"  placeholder=" Name"/>
                  <input  type="text" name="lastName"  placeholder=" Last Name" />
                  <input type="number"   name="age"   placeholder="Age" />
                  <input type="text" name="photo"  placeholder="Photo" />
                  <input type="email" name="email"  placeholder=" Email"/> <input type="password" name="password" placeholder="Password" />
                  </form>
                  <button onClick={handleSubmit} className='btn'>  Join! </button>
                  </div>
                      </>
                     
             </form>
                     
               </div> 
                  
          </div> 
          
       
             
           

);
}