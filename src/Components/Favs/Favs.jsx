import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import favsActions from '../../Redux/Actions/favsActions'
export default function Favs({props}) {
    let game= props

    let {  logged } = useSelector(state=>state.userReducer)
    let [favorites, setFavorites]=useState(false)
    let {SaveFav, unFav}= favsActions
    let {favorite}= useSelector(state=>state.favsReducer)
    const dispatch= useDispatch()


    const toggleFavorite=()=>{
      if (logged){
        setFavorites(!favorites) 
                
      } else{
        Swal.fire({
          background:'#000000',
         position: 'center',
          color: 'white',
         title:'Log in to save it',
         showConfirmButton: false,
         timer: 3500
       })
      }

        // if(logged){
        //     if (id)
        // }
    }
let exist= favorite.some(favs=>favs._id=== game._id)

console.log(exist)

let handleSend=()=>{
  dispatch(SaveFav(game))
   
  }

let handleRemove=()=>{
  dispatch(unFav(game))
  }
   
    
  
  return (
    <div onClick={toggleFavorite}>
      {exist=== true
      ?(<img src='/images/fav.png'alt='add' id={game._id} onClick={handleRemove}/> )
      :( <img src='/images/unfav.png' alt='added' id={game._id} onClick={handleSend}/> )
      }
       
       

        
        </div>
  )
}
