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
  const forName = useRef();
  const forLastName = useRef();
  const forPhoto = useRef();
  const forAge = useRef();
  const formRef = useRef();
  let token = useSelector((store) => store.userReducer);
  console.log(token, "<==");
  let { name, lastName, photo, age, email, password } = token;
  // useEffect(() => {
  //   return async function fetchdata() {
  //     await axios
  //       .get(
  //         `${BASE}/auth/me${token.id}
  //         `,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         let userdata = res.data.response;
  //         setUser(userdata);
  //       });
  //   };
  // }, []);
  async function saveData(e) {
    e.preventDefault();
    const saveData = {
      name: forName.current.value,
      lastName: forLastName.current.value,
      photo: forPhoto.current.value,
      age: forAge.current.value,
      email: email,
    };
    console.log(token.token);
    try {
      let headers = { headers: { "Authorization": `Bearer ${token.token}` } };
      let res = await axios.patch(
        `${BASE}/auth/me/${token.id}`,
        saveData,
        headers
      );
      console.log(res, "<=========");
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
              placeholder={name}
              defaultValue={name}
              ref={forName}
            />
            <input
              className="input-profile"
              type="text"
              placeholder={lastName}
              defaultValue={lastName}
              ref={forLastName}
            />
            <input
              className="input-profile"
              type="text"
              placeholder={photo}
              defaultValue={photo}
              ref={forPhoto}
            />
            <input
              className="input-profile"
              type="number"
              placeholder={age}
              defaultValue={age}
              ref={forAge}
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
