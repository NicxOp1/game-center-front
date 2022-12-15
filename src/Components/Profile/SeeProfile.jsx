import React from "react";
import "./profile.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

export default function SeeProfile() {
  //   const [user, setUser] = useState([]);
  //   let token = useSelector((store) => store.loginInReducer.token);
  //   useEffect(() => {
  //     return async function fetchdata() {
  //       await axios
  //         .get(`${URL}/auth/me/${token.id}`, {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         })
  //         .then((res) => {
  //           let userdata = res.data.response;
  //           setUser(userdata);
  //         });
  //     };
  //   }, []);

  return (
    <>
      <div className="col-2-header">
        <h4>Your Profile</h4>
      </div>
      <div className="userData-columns">
        <form className="col-2-userData-1">
          <label> Name: </label>
          <input class="inputs-profile" type="text" value="gabriel" disabled />
          <label> LastName: </label>
          <input class="inputs-profile" type="text" value="cornide" disabled />
          <label> Photo: </label>
          <input
            class="inputs-profile"
            type="text"
            value="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/860950/6e1b5f5977036a189465f5455f2c54722c12883d.png"
            disabled
          />
        </form>
        <form className="col-2-userData-2">
          <label> Age: </label>
          <input class="inputs-profile" type="number" value="22" disabled />
          <label> Email: </label>
          <input
            class="inputs-profile"
            type="text"
            value="gabricornidel@gmail.com"
            disabled
          />
        </form>
      </div>
    </>
  );
}
