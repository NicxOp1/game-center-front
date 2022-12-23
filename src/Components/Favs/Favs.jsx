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
let handleSend=()=>{
  if(!favorites){
    dispatch(SaveFav(game))
 } else {
  dispatch(unFav(game))
 }
}
  return (
    <div onClick={toggleFavorite}>
      
       
        <img src={favorites ?'/images/fav.png' : '/images/unfav.png'}alt={favorites ?'added' : 'add'} onClick={handleSend}/>

        
        </div>
  )
}
