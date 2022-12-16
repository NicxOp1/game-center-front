import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { BoxIconElement } from 'boxicons';
export default function DescriptionHome(props) {
  let { name, photo,rate } = props;

  return (
    <>
<Fade >
    <div className='containerPhoto'>
      <figure>
      <img src={photo} alt={name} style={{height:220,width:330}}  />
      <div className="capa">
        <h3>{name}</h3>
        <p><box-icon name='star' type='solid' flip='horizontal' animation='tada' ></box-icon>{rate}</p>
      </div>
      </figure>
    </div>
</Fade>
    </>
  );
}
