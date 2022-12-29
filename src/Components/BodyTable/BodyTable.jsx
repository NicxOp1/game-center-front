import "./bodyTabble.css";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import cartActions from "../../Redux/Actions/cartActions";

export default function BodyTable(props) {
  let { game } = props;
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(cartActions.remove(game));
  };
  const add = (e) => {
    e.preventDefault();
    dispatch(cartActions.plus(game));
  };
  const deleteProduct = (e) => {
    e.preventDefault();
    dispatch(cartActions.deleteProduct(game));
  };

  return (
    <div className="tableBoddy">
      <th>
        <img className="img-carrito" src={game.photo} alt={game.name} />
      </th>
      <div className="cont-buy">{game.name}</div>
      <div className="cont-buy-usd">{game.price * game.unity} USD</div>
      <div className="buton-buy">
        {/* <th className="cont-buy-price">${game.price}</th> */}
        {/* <th className="unity-cell-table">
        {game.unity}
        <div className="buttons-add-remove">
          <button className="button-add-unity" id={game.name} onClick={add}>
            +
          </button>
          <button className="button" id={game.name} onClick={remove}>
            -
          </button>
        </div>
      </th> */}
        <button className="button" id={game.name} onClick={deleteProduct}>
          X
        </button>
      </div>
    </div>
  );
}
