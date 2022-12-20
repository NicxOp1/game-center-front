/* import React, { useState } from "react"; */
import './cardGames.css'

export default function CardGames(props) {

    let {name,category,img,price} = props

/*     const [hover,setHover] = useState(false) */

  return (
    <div className='cont-card'>
        <div className='cont-card-1'>
            <div className='cont-img-card'>
                <img className='img-card' src={img} alt="wow" />
            </div>
            <div className='title-card'>
                <div>
                    <h6>{name}</h6>
                    <p className='text-category-card'>{category}</p>
                    <p className='text-category-card'>price {price} $</p>
                </div>
                <div>
                    <button>ds</button>
                </div>
            </div>
        </div>
    </div>
  )
}
