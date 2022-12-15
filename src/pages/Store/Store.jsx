import React from 'react'
import "./store.css"
import CardGames from '../../Components/CardGames/CardGames'
/* import CardDitails from '../../Components/CardDetails/CardDetails' */
import Search from '../../Components/Search/Search'
import { games } from '../../data/games'
import Checkbox from '../../Components/Checkbox/Checkbox'

/* const [hover,setHover] = useState(false) */

export default function Store() {

  let check = Array.from(new Set(games.map(e => e.category)))
  console.log(check);
  return (
    <div className='content-store'>
      {/* <h1 className='title-store'>Store</h1> */}
      <div className='content-CardDitails'>
{/*         <CardDitails/> */}
      </div>
      <div className='content-cards2'>
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
            games.map(e => <CardGames name={e.name} category={e.category} img={e.photo} price={e.price}
/*               onMouseEnter={(e:React.MouseEvent) => setHover (true)}
              onMouseLeave={(e:React.MouseEvent) => setHover (false)} */
            >
{/*               {hover ? <video src={e.video}/> : <img  src={e.photo}/>} */}
            </CardGames>)
        }
        </div>
      </div>
    </div>
  )
}


