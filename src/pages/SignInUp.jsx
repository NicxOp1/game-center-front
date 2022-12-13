import React from "react";
import "./signInUp.css";

export default function SignInUp() {
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
                                id="logemail"
                                autocomplete="off"
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="#" className="btn mt-4">
                              submit
                            </a>
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
                          <div className="content-sign-in-up ">
                            <h4 className="title-sign-in-up">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Name"
                                id="logname"
                                autocomplete="off"
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Last Name"
                                id="logname"
                                autocomplete="off"
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Photo"
                                id="logname"
                                autocomplete="off"
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="number"
                                name="logname"
                                className="form-style"
                                placeholder="Age"
                                id="logname"
                                autocomplete="off"
                              />
                              <i className="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i classNameName="input-icon"></i>
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                              />
                              <i className="input-icon"></i>
                            </div>
                            <a href="#" className="btn mt-4">
                              submit
                            </a>
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
      </div>
    </>
  );
}
