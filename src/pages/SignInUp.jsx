import React from "react";
import "./signInUp.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import userActions from "../Redux/Actions/userActions";
import axios from "axios";
import {BASE} from '../Api/url'
import Swal from 'sweetalert2'

export default function SignInUp() {

let dispatch= useDispatch()
let {SignIn,}= userActions
//para log-in
let email= useRef()
let password= useRef()
//para sign up
let formRef= useRef()
//login
function Login(){
  let signIn={
    email: email.current.value,
    password: password.current.value
  }
  dispatch(SignIn(signIn))
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
  console.log(form)
   await axios.post(`${BASE}/auth/`, form)
   .then((res=>{
    console.log(res)
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
        console.log(error)
      }


   }))
 }

 

  return (
    <>
      <div className="content-sign-in-up">
        <div className="section-sign-in-up">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="subtitle-sign-in-ip">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="content-sign-in-up">
                            <h4 className="title-sign-in-up">Log In</h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                
                              ref={email}
                              required/>
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                autocomplete="off"
                                ref={password}
                                required
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button className="btn mt-4" onClick={Login}>
                              submit
                            </button>
                            <p className="link-sign-in-up">
                              <a href="#0" className="link-sign-in-up">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <form className="content-sign-in-up" ref={formRef}>
                            <h4 className="title-sign-in-up">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-style"
                                placeholder="Your Name"
                                autocomplete="off"
                                required
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="lastName"
                                className="form-style"
                                placeholder="Your Last Name"
                                autocomplete="off"
                                required
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="photo"
                                className="form-style"
                                placeholder="Photo"
                                autocomplete="off"
                                required
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="number"
                                name="age"
                                className="form-style"
                                placeholder="Age"
                                autocomplete="off"
                                required
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Your Email"
                                autocomplete="off"
                                required
                              />
                              <i classNameName="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Your Password"
                                autocomplete="off"
                                required
                              />
                              <i className="input-icon"></i>
                            </div>
                            <button className="btn mt-4" onClick={handleSubmit}>
                              submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
