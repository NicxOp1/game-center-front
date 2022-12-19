import React, { useEffect, useRef, useState } from 'react'
import "./store.css"
import CardGames from '../../Components/CardGames/CardGames'
/* import CardDitails from '../../Components/CardDetails/CardDetails' */
import Search from '../../Components/Search/Search'
/* import { games } from '../../data/games' */
import Checkbox from '../../Components/Checkbox/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import gameActions from '../../Redux/Actions/gamesActions'
/* const [hover,setHover] = useState(false) */

export default function Store() {
  let searchRef = useRef(null)
  const dispatch = useDispatch()
  let [checket, setChecket] = useState([])
  const [value, setValue] = useState('')
  const {getGame,filterGame,filterSearch} = gameActions
  const {game} = useSelector((state)=>state.gamesReducer)
  console.log(game);

  useEffect(() => {
    axios.get(`http://localhost:8080/games`)
        .then(res => setChecket(res.data.res))
        .catch(err => console.log(err.message))
}, [])






  let controlsearch  = (e) => {
    let searched = searchRef.current.value
    console.log(searched)
    dispatch(filterSearch(searched))
}


  let check = Array.from(new Set(checket.map(e => e.category)))

  console.log(check);
  return (
    <div className='content-store'>
      {/* <h1 className='title-store'>Store</h1> */}
      <div className='content-CardDitails'>
{/*         <CardDitails/> */}
      </div>
      <div className='content-cards2' style={{marginTop:"5rem"}}>
        <div>
            <Search/>
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
              check.map( e => <Checkbox category={e}></Checkbox>) 
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


