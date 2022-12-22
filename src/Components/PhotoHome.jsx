import React from "react";
import "../pages/home.css";
import { Fade } from "react-awesome-reveal";
// import { height } from "dom7";

export default function PhotoHome(props) {
  let { name, photo } = props;

  return (
    <>
      <div className="imgDiv">
        <Fade>
          <img src={photo}  alt={name}></img>
        </Fade>
      </div>
    </>
  );
}
