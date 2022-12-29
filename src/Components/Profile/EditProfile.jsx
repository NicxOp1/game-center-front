import { useState } from "react";
import axios from "axios";
import { BASE } from "../../Api/url";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileEdit";
import { NavLink } from "react-router-dom";

export default function EditProfile() {
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
    <div class="container-profiles">
      <div className="profile-card">
        <div className="container-column-1">
          <div className="container-column-profile">
            <div>
              <img
                className="profile-pic"
                src={`${token.photo}`}
                alt={`${token.name}`}
              />
            </div>
            <div className="profile-name">
              <h5>{`${token.name}`}</h5>
            </div>
            <div className="col-1-links">
              <NavLink to={"/Profile"}> Profile</NavLink>
              <NavLink to={"/ProfileEdit"}> Edit</NavLink>
              <hr width="65" />
            </div>
          </div>
        </div>
        <div className="container-column-2">
          <ProfileEdit />
        </div>
      </div>
    </div>
  );
}
