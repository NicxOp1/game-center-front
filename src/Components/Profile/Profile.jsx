import React from "react";
import "./profile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function Profile() {

  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.userReducer);

  useEffect(() => {
    return async function fetchdata() {
      await axios
        .get(`http://localhost:8080/auth/me/${token.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          let userdata = res.data.response;
          setUser(userdata);
        });
    };
  }, []);

  return (
    <>
      <main className="body-content-profile">
        <div class= "content-principate-profile">
          <div className="config-profile">
            <h1 className="title-profile">ACCOUNT SETTINGS</h1>
            <h2 className="title-profile">Manage Your Account Data</h2>
          </div>
        </div>
        <div className="content-profile">
          <div className="content-input-profile">
            <div className="content-text-profile">
              <div className="content-img-profile">
                <img
                  className="img-profile"
                  src= {`${token.photo}`}
                  alt="photoUser"
                />
              </div>
              <h3 className="title-profile">Your Profile</h3>
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Edit&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Edit&nbsp;
                </span>
              </button>
            </div>
            <div className="content-label">
              <input
                className="input-profile"
                type="text"
                value={`${token.name}`}
                disabled
              />

              <input
                className="input-profile"
                type="text"
                value={`${token.role}`}
                disabled
              />

              <input
                className="input-profile"
                type="text"
                value={`${token.email}`}
                disabled
              />

              <input
                className="input-profile"
                type="text"
                value="**********"
                disabled
                placeholder=""
              />

              <input
                className="input-profile"
                type="text"
                value={`${token.photo}`}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
