import React, { useEffect, useRef, useState } from 'react'
import "./store.css"
import CardGames from '../../Components/CardGames/CardGames'
import Search from '../../Components/Search/Search'
import Checkbox from '../../Components/Checkbox/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import gameActions from '../../Redux/Actions/gamesActions'


export default function Store() {
  let searchRef = useRef(null)
  const dispatch = useDispatch()
  let [checketGame, setChecketGame] = useState([])
  const {getGame,filterGameInput} = gameActions
  const {game} = useSelector((state)=>state.gamesReducer)



  console.table(checketGame);

  useEffect(() => {
    axios.get(`http://localhost:8080/games/`)
        .then(res => setChecketGame(res.data.res))
        .catch(err => console.log(err.message))
}, [])






  let check = Array.from(new Set(checketGame.map(e => e.category)))

  console.log(check);
  return (
    <div className='content-store'>
      {/* <h1 className='title-store'>Store</h1> */}
      <div className='content-CardDitails'>
{/*         <CardDitails/> */}
      </div>
      <div className='content-cards2' style={{marginTop:"5rem"}}>
        <div>
          {/* <input type="search" ref={searchRef} onChange={controlsearch } /> */}
        </div>
        <div className='content-checkbox-select'>
          <select className='select-store'>
            <option value="hide">sort by</option>
            <option className='options-select-store'>higher price</option>
            <option className='options-select-store'>lower price</option>
          </select>
          <select className='select-store'>
            <option value="hide">sort by</option>
            <option className='options-select-store'>higher price</option>
            <option className='options-select-store'>lower price</option>
          </select>
          <div className='content-checkbox-store'>
            {
              check.map(e => 
                <Checkbox category={e} />
            )
            }
          </div>
        </div>
        <div className='cont-card'>
        {
            game.map(e => <CardGames name={e.name} category={e.category} img={e.photo} price={e.price}>
            </CardGames>)
        }
        </div>
      </div>
    </div>
  )
}


