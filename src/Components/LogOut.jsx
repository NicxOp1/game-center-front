import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import userActions from "../Redux/Actions/userActions";
import { useNavigate } from "react-router-dom";

export default function LogOut({ props }) {
  let { logOut } = userActions;
  let { token } = useSelector((state) => state.userReducer);
  //  console.log(token)
  let dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    Swal.fire({
      background: "#151513",
      title: "Are you sure want logged out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#252525",
      cancelButtonColor: "#252525",
      confirmButtonText: "Log out",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(logOut(token));
        Swal.fire({
          title: "Logged out succesfully",
          text: "Come back soon",
          icon: "success",
          background: "#151513",
        }).then(() => navigate("/"));
      }
    });
  }

  return (
    <button onClick={() => signOut()} className={props}>
      LogOut{" "}
    </button>
  );
}
