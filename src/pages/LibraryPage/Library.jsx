import React, { useEffect } from "react";
import CardGames from "../../Components/CardGames/CardGames";
import "./library.css";
import {  useDispatch, useSelector } from "react-redux";
import gameActions from "../../Redux/Actions/gamesActions";
import { useNavigate } from "react-router-dom";


export default function Library() {
   const dispatch= useDispatch()
   let {getGame}= gameActions
  let { id } = useSelector(state=>state.userReducer)
  let {game} = useSelector(state=> state.gamesReducer)
  const navigate = useNavigate() 
//  console.log(id)
  useEffect(() => {
       
    dispatch(getGame())
}, [dispatch, getGame])



  let myGames= game.filter(game=> game.buyed.includes(id))
 
  


  return (
    <>
      <div className="content-library">
        <div className="content-title-library">
          <h1 className="first-title-library">Library of your Games</h1>
        </div>
        <div className="content-btn-cards-library">
          <div className="content-myfavority-library">
            {/* <div className="title-library-one">
              <h3 title-library-card>My Favourites</h3>
            </div> */}
            {/* <div className="cont-card-library-one">
              {game.map((e) => (
                <CardGames
                  name={e.name}
                  category={e.category}
                  img={e.photo}
                  price={e.price}
                  id={e._id}
                />
              ))}
            </div> */}
          </div>
        </div>
        {/* arreglar logica */}
        <div className="content-btn-cards-library">
          <div className="content-myfavority-library">
            <div className="title-library-one">
              <h3 title-library-card>My Games</h3>
            </div>
              {myGames.length > 0
              ?(
                <div className="cont-card-library-one">
                {myGames?.map((e) => (
                <div className="cont-card-store">
                  <div className="cont-card-1">
                  <div className="cont-img-card">
                  <img className="img-card" src={e.photo} alt={e.name} />
                  </div>
                  <div className="title-card">
                  <div className="text-card-store">
                  <h6>{e.name}</h6>
                  <p className="text-category-card">{e.category.join(' - ')}</p>
                  </div>                
                  </div>
                  <button className="add-to-cart">
                Download
              </button>
                  </div>

                </div>
              ))}
                </div>
              )
              :(
                <div className="cont-card-notfound">
                 
                
                  <h6> Want to buy?</h6>
                  <div className="btn-header" onClick={()=>navigate(`/Store`)}>
                Go to Store
              </div> 
                                
                  </div>
               

              )}
            </div>
          </div>
        
      </div>
    </>
  );
}
