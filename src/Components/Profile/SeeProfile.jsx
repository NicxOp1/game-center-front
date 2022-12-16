import React from "react";
import "./profile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE } from "../../Api/url";

export default function SeeProfile() {
  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.userReducer);
  console.log(token);

  useEffect(() => {
    return async function fetchdata() {
      await axios
        .get(`${BASE}/auth/me/${token.id}`, {
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
  console.log(token.name);
  return (
    <>
      <div className="col-2-header">
        <h4>Your Profile</h4>
      </div>
      <div className="userData-columns">
        <form className="col-2-userData-1">
          <label> Name: </label>
          <input
            class="inputs-profile"
            type="text"
            value={`${token.name}`}
            disabled
          />
          <label> LastName: </label>
          <input
            class="inputs-profile"
            type="text"
            value={`${token.lastName}`}
            disabled
          />
          <label> Photo: </label>
          <input
            class="inputs-profile"
            type="text"
            value={`${token.photo}`}
            disabled
          />
        </form>
        <form className="col-2-userData-2">
          <label> Age: </label>
          <input
            class="inputs-profile"
            type="number"
            value={`${token.age}`}
            disabled
          />
          <label> Email: </label>
          <input
            class="inputs-profile"
            type="text"
            value={`${token.email}`}
            disabled
          />
        </form>
      </div>
    </>
  );
}
