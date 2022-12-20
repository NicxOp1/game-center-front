/* import React, { useState } from "react"; */
import './cardGames.css'
import cartActions from '../../Redux/Actions/cartActions'
import { useDispatch } from 'react-redux'
export default function CardGames(props) {
    const dispatch = useDispatch()
    let {name,category,img,price,game} = props

/*     const [hover,setHover] = useState(false) */

const addToCart = (e) =>{
    e.preventDefault()
    game= {
        ...game,
        unity:1
    }
    dispatch(cartActions.addGame(game))
}
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
                    <button onClick={addToCart}>ds</button>
                </div>
            </div>
        </div>
    </div>
  )
}
