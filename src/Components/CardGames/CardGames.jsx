/* import React, { useState } from "react"; */
import "./cardGames.css";
import cartActions from "../../Redux/Actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRoute } from "react-router-dom";

export default function CardGames(props) {
  const dispatch = useDispatch();
  let { name, category, img, price, game,id } = props;
  // console.log(id);

      /* const [hover,setHover] = useState(false) */
  let products = useSelector((store) => store.cartReducer.products);
  let productOnCart = products.filter((e) => e._id === game._id);
  const addToCart = (e) => {
    e.preventDefault();
    game = {
      ...game,
      unity: 1,
    };
    dispatch(cartActions.addGame(game));
  };


  const removeToCart = (e) => {
    e.preventDefault();
    dispatch(cartActions.deleteProduct(game));
  }
  return (
    <div className="cont-card-store">
      <div className="cont-card-1">
        <div className="cont-img-card">
          <LinkRoute to={`/Ditails/${id}`}>
            <img className="img-card" src={img} alt="wow" />
          </LinkRoute>
        </div>
        <div className="title-card">
          <div className="text-card-store">
            <h6>{name}</h6>
            <div className="content-category-store">
              <p className="text-category-card">{category[1]}</p>
              <p className="text-category-card">{category[0]}</p>
            </div>
            <p className="text-category-card">Price $ {price}</p>
          </div>
          <div className="content-btn-card-store">
            {productOnCart.length > 0 ? (
              <button className="remove-from-cart" onClick={removeToCart}>
                Remove
              </button>
            ) : (
              <button className="add-to-cart" onClick={addToCart}>
                Buy
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
