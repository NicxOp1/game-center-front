import React, { useEffect, useRef, useState } from 'react'
import "./store.css"
import CardGames from '../../Components/CardGames/CardGames'
import Search from '../../Components/Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import gameActions from '../../Redux/Actions/gamesActions'
import Favs from '../../Components/Favs/Favs'


export default function Store() {
  let searchRef = useRef(null)
  let categoryRef = useRef(null)
  let priceRef = useRef(null)
  const dispatch = useDispatch()
  let [checketGame, setChecketGame] = useState([])
  const {getGame,filterGameInput} = gameActions
  const {game} = useSelector((state)=>state.gamesReducer)




  useEffect(() => {
    axios.get(`https://game-center.onrender.com/games/`)
        .then(res => setChecketGame(res.data.res))
        .catch(err => console.log(err.message))
    dispatch(getGame())
}, [])

  let valores = {} 




  const selectEvent  = (e) => {
    valores = {
      category: "&category="+categoryRef.current.value,
      value: "&name="+searchRef.current.value,
      order: "&price="+priceRef.current.value
    }
    dispatch(filterGameInput(valores))


  };




  let checkMap = []
  let check = checketGame.map(e => e.category)
  check.map (e => e.map(a => checkMap.push(a)))
  let categori = Array.from(new Set(checkMap))




  return (
    <div className='content-store'>
      <div className='content-CardDitails'>
      </div>
      <div className='content-cards2'>
        <div className='content-checkbox-select'>
          <select ref={priceRef} onChange={selectEvent} className='select-store'>
            <option value="">Sort by Price</option>
            <option value="desc" className='options-select-store'>Higher price</option>
            <option value="asc" className='options-select-store'>Lower price</option>
          </select>
          <div>
          <Search search={selectEvent} searchRef={searchRef}/>
          </div>
          <div className='content-checkbox-store'>
          <select className='select-store' ref={categoryRef} onChange={selectEvent}>
            <option className='options-select-store' value="">Sort by Category</option>
            {
              categori.map(e => 
                <option className='options-select-store' value={e}>{e}</option>
            )
            }
          </select>
          </div>
        </div>
        <div className='cont-card-store'>
        {
            game.length > 0 ?
            game.map(e => <CardGames game={e} id={e._id} name={e.name} category={e.category} img={e.photo} price={e.price}>
              <Favs props={e}/>
            </CardGames>) :
            <img className="image-notfound-search" src='https://i.postimg.cc/3JFv2722/istockphoto-1291185387-612x612-removebg-preview.png' alt="gamenofound"/>
          
        }
        </div>
      </div>
    </div>
  )
}


