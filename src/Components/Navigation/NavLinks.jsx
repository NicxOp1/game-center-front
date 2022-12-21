import React from "react";
import "./navLinks.css";
import { useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import LogOut from "../../Components/LogOut";

export default function NavLinks() {
  let { role, logged } = useSelector((state) => state.userReducer);

  return (
    <>
      <LinkRouter to="/" className="btn-header">
        HOME
      </LinkRouter>
      <LinkRouter to="/Store" className="btn-header">
        STORE{" "}
      </LinkRouter>
      <LinkRouter to="/Library" className="btn-header">
        LIBRARY{" "}
      </LinkRouter>
      <LinkRouter to="" className="btn-header">
        {" "}
        CART
      </LinkRouter>
      {role === "admin" ? (
        <LinkRouter to="/AddGame" className="btn-header">
          {" "}
          ADD GAME{" "}
        </LinkRouter>
      ) : null}

      {logged ? (
        <>
          <LinkRouter to="/Profile" className="btn-header">
            {" "}
            PROFILE{" "}
          </LinkRouter>

          <LogOut props="btn-header" />
        </>
      ) : (
        <LinkRouter to="/SignInUp" className="btn-header">
          {" "}
          JOIN{" "}
        </LinkRouter>
      )}
    </>
  );
}
