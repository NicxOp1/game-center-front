import React from "react";
import "./profile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BASE } from "../../Api/url";

export default function SeeProfile() {
  let token = useSelector((store) => store.userReducer);
  const [user, setUser] = useState([]);
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
      <div className="content-profile">
        <div className="title-profile-edit">
          <h4 className="title-profile">Your Profile</h4>
        </div>
        <form className="content-label">
          <input
            class="input-profile"
            type="text"
            value={`${token.name}`}
            disabled
          />
          <input
            class="input-profile"
            type="text"
            value={`${token.lastName}`}
            disabled
          />
          <input
            class="input-profile"
            type="number"
            value={`${token.age}`}
            disabled
          />
          <input
            class="input-profile"
            type="text"
            value={`${token.photo}`}
            disabled
          />
          <input
            class="input-profile"
            type="text"
            value={`${token.role}`}
            disabled
          />
        </form>
      </div>
    </>
  );
}
