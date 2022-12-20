import './bodyTabble.css'
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import cartActions from "../../Redux/Actions/cartActions";

export default function BodyTable(props) {
  let { game } = props;
  const dispatch = useDispatch()
  
  const remove =(e)=> {
    e.preventDefault()
    dispatch(cartActions.remove(game))
  }
  const add =(e)=> {
    e.preventDefault()
    dispatch(cartActions.plus(game))
  }
  const deleteProduct =(e)=> {
    e.preventDefault()
    dispatch(cartActions.deleteProduct(game))
  }
  
  return (
    <tr className="tableBoddy">
      <th>{game.name}</th>
      <th>${game.price}</th>
      <th>
        {game.unity}
        <button className="button" id={game.name} onClick={add}>+</button>
        <button className="button" id={game.name} onClick={remove}>-</button>
        <button className="button" id={game.name} onClick={deleteProduct}>X</button>
      </th>
      <th>{game.price * game.unity}USD</th>
    </tr>
  );
}
