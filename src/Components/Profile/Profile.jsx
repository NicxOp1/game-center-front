import React from "react";
import "./profile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE } from "../../Api/url";
import SeeProfile from "./SeeProfile";

export default function Profile({ name, photo, age, email, role, id }) {
  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.userReducer);
  useEffect(() => {
    return async function fetchdata() {
      await axios
        .get(
          `${BASE}/auth/me/${token.id}
          `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          let userdata = res.data.response;
          setUser(userdata);
        });
    };
  }, []);

  return (
    <>
      <div class="body-content-profile">
        <div className="content-profile-seeprofile">
          <div className="profile-name">
            <div className="content-img-profile">
              <img
                className="img-profile"
                src={`${token.photo}`}
                alt={`${token.name}`}
              />
            </div>
            <div className="content-info-profile">
              <h5 className="text-profile-edit">{`${token.name}`}</h5>
              <div className="content-link-profile">
                <button class="btn-profile">
                  <NavLink to={"/Profile"}> Profile </NavLink>
                </button>
                <button class="btn-profile">
                  <NavLink to={"/ProfileEdit"}> Edit </NavLink>
                </button>
              </div>
            </div>
          </div>
          <SeeProfile />
        </div>
      </div>
    </>
  );
}
