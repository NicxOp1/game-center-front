import React from "react";
import "../Pages/home.css";
import { Fade } from "react-awesome-reveal";
// import { height } from "dom7";

export default function PhotoHome(props) {
  let { name, photo } = props;

  return (
    <>
      <div className="imgDiv">
        <Fade>
          <img src={photo} style={{ height: 220, width: 280 }} alt={name}></img>
        </Fade>
      </div>
    </>
  );
}
