import React from "react";
import "../pages/home.css";
import { Fade } from "react-awesome-reveal";

export default function PhotoHome(props) {
  let { name, photo } = props;

  return (
    <>
      <div className="imgDiv">
        <Fade>
          <img src={photo} alt="game"/>
          <h3>{name}</h3>
        </Fade>
      </div>
    </>
  );
}
