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
  let categoryRef = useRef(null)
  let priceRef = useRef(null)
  const [value, setValue] = useState('')
  const [category, setCategory] = useState([])
  const dispatch = useDispatch()
  let [checketGame, setChecketGame] = useState([])
  const {getGame,filterGameInput} = gameActions
  const {game} = useSelector((state)=>state.gamesReducer)




  useEffect(() => {
    axios.get(`http://localhost:8080/games/`)
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

/*   useEffect(()=>{
    
  },[value,valores.category])
 */


  let checkMap = []
  let check = checketGame.map(e => e.category)
  check.map (e => e.map(a => checkMap.push(a)))
  let categori = Array.from(new Set(checkMap))




  return (
    <div className='content-store'>
      {/* <h1 className='title-store'>Store</h1> */}
      <div className='content-CardDitails'>
{/*         <CardDitails/> */}
      </div>
      <div className='content-cards2' style={{marginTop:"5rem"}}>
        <div>
          <Search search={selectEvent} searchRef={searchRef}/>
        </div>
        <div className='content-checkbox-select'>
          <select ref={priceRef} onChange={selectEvent} className='select-store'>
            <option value="">sort by</option>
            <option value="desc" className='options-select-store'>higher price</option>
            <option value="asc" className='options-select-store'>lower price</option>
          </select>
          <div className='content-checkbox-store'>
          <select className='select-store' ref={categoryRef} onChange={selectEvent}>
            <option className='options-select-store' value="">sort by</option>
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
            game.map(e => <CardGames name={e.name} category={e.category} img={e.photo} price={e.price}>
            </CardGames>)
        }
        </div>
      </div>
    </div>
  )
}


