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
        <button id={game.name} onClick={add}>Mas</button>
        <button id={game.name} onClick={remove}>Menos</button>
        <button id={game.name} onClick={deleteProduct}>Delete</button>
      </th>
      <th>{game.price * game.unity}USD</th>
    </tr>
  );
}
