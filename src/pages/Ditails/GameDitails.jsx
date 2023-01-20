import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE } from '../../Api/url'
import "./gameDitails.css"
import Favs from '../../Components/Favs/Favs'
import { useDispatch, useSelector } from "react-redux";
import cartActions from '../../Redux/Actions/cartActions'

export default function GameDitails() {
  const [game, setGame] = useState([])
  const dispatch = useDispatch()
  let { id } = useParams()
// console.log(id)
  useEffect(() => {
    axios
        .get(`${BASE}/games/${id}`)
        .then(res => setGame(res.data.game))
        .catch((error) => console.log(error))

    }, [id])

    let products = useSelector((store) => store.cartReducer.products);
  let productOnCart = products.filter((e) => e._id === game._id);
  const addToCart = (e) => {
    e.preventDefault();
    setGame({
      ...game,
      unity: 1,
    })  
    dispatch(cartActions.addGame(game));
  };


  const removeToCart = (e) => {
    e.preventDefault();
    dispatch(cartActions.deleteProduct(game));
  }


    if (game.length !== 0){
  return (
    <div className='content-ditails'>
        <h3 className='title-game-ditails'>{game.name}</h3>
      <div className='content-ditails-all'>
      <div className='content-img-title-ditails'>
        <video className="video-ditails" autoPlay loop muted controls>
                  <source
                    src={game.video}
                    type="video/mp4"
                  />
                </video>
      </div>
      <div className='content-details-ditails'>
        <div className='content-img-descrip-ditails'>
          <div className='content-img-ditails'>
            <img className='img-ditails' src={game.photo} alt="Need for Speed™ Unbound" />
          </div>
          <p className='description-p-ditails'>{game.description}</p>
          <Favs props={game}/>
        </div>
        <div className='content-data-ditails'>
          <div className='content-data-categor'>
            <div className='content-p-category'>
              <p className='ditails-ditails'>Category</p>
              <p className='ditails-ditails'>Date</p>
            </div>
            <div className='content-p-category'>
              <div className='content-category-ditails'>
                <p className='description-ditails'>{game.category[0]}</p>
                <p className='description-ditails'>{game.category[1]}</p>
              </div>

              <p className='description-ditails'>{game.date.slice(0,-14)}</p>
            </div>
          </div>
          <div className='content-price-ditails'>
            <p className='description-ditails'><span className='ditails-ditails-price'>Price</span> ${game.price}</p>
            {productOnCart.length > 0 ? (
              <button className="remove-from-cart" onClick={removeToCart}>
                Remove
              </button>
            ) : (
              <button className="add-to-cart" onClick={addToCart}>
                Buy
              </button>
            )}
          </div>
        </div>  
      </div>
      </div>
    </div>
  )
}
}
