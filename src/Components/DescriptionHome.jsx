import React from 'react'
import { Fade } from 'react-awesome-reveal'
export default function DescriptionHome(props) {
  let { name, photo } = props;

  return (
    <>
<Fade className="snip1577">
  <img src={photo} alt={name} className="w-full h-full"/>
  <figcaption>
    <h3>{name}</h3>
    <h4>{name}</h4>
  </figcaption>
  <a href="#">Details</a>
</Fade>
    </>
  );
}
