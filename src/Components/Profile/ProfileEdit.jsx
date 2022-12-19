import React from "react";
import "./profile.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { BASE } from "../../Api/url";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const name = useRef(null);
  const lastName = useRef(null);
  const photo = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

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

  async function saveData(e) {
    e.preventDefault();
    const saveData = {
      name: name.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      age: age.current.value,
      email: email.current.value,
    };
    try {
      let res = await axios.patch(`${BASE}/auth/me/${token.id}`, saveData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "The user has been Updated!",
          willClose: () => {
            navigate("/Profile");
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error...",
          text: `Errors: ${res.data.message.join(", ")}`,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error founded",
        text: err.message,
      });
    }
  }

  return (
    <>
      <div className="body-content-profile ">
        <div className="edit-profile">
          <div className="col-2-header">
            <h4 className="title-profile">Edit Your Profile Here</h4>
          </div>
          <form id="myform" className="content-label">
            <input
              className="input-profile"
              type="text"
              placeholder={`${token.name}`}
              ref={name}
            />
            <input
              className="input-profile"
              type="text"
              placeholder={`${token.lastName}`}
              ref={lastName}
            />
            <input
              className="input-profile"
              type="text"
              placeholder={`${token.photo}`}
              ref={photo}
            />
            <input
              className="input-profile"
              type="text"
              placeholder={`${token.email}`}
              ref={email}
            />
          </form>
          <div className="content-button-profile">
            <button
              className="icon-btn add-btn"
              onClick={(e) =>
                Swal.fire({
                  title: "Do you want to save the changes?",
                  showDenyButton: true,
                  confirmButtonText: "YES.",
                  confirmButtonColor: "green",
                  denyButtonText: `CANCEL`,
                  denyButtonColor: "grey",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(saveData(e));
                  } else if (result.isDenied) {
                    Swal.fire("Changes not saved.");
                  }
                })
              }
              type="button"
            >
              <div class="add-icon"></div>
              <div class="btn-txt">Edit Profile</div>
            </button>
            <button class="btn-profile-edit">
              <NavLink to={"/Profile"}> Back To Profile </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
