/* import React, { useState } from "react"; */
import './cardGames.css'

export default function CardGames(props) {

    let {name,category,img,price} = props

/*     const [hover,setHover] = useState(false) */

  return (
    <div className='cont-card-store'>
        <div className='cont-card-1'>
            <div className='cont-img-card'>
                <img className='img-card' src={img} alt="wow" />
            </div>
            <div className='title-card'>
                <div className='text-card-store'>
                    <h6>{name}</h6>
                    <p className='text-category-card'>{category}</p>
                    <p className='text-category-card'>Price ${price}</p>
                </div>
                <div className='content-btn-card-store'>
                <button>Buy</button>
                </div>
            </div>
        </div>
    </div>
  )
}
