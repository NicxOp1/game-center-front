import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "boxicons";
import "./home.css";
import FotoHome from "../Components/PhotoHome";
import gamesActions from "../Redux/Actions/gamesActions";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css'
import { height } from "dom7";
import DescriptionHome from "../Components/DescriptionHome";
export default function Home() {
  let dispatch = useDispatch();
  const game = useSelector((state) => state.gamesReducer.game);
  const bestGame = useSelector((state) => state.gamesReducer.bestGame);
  let dato = { rate: "desc" };
  useEffect(() => {
    dispatch(gamesActions.getGame());
    dispatch(gamesActions.filterGame(dato));
    console.log(game);
    console.log(bestGame);
  }, []);

  console.log(bestGame);

  return (
    <>
      <div className="divHome1">
        <div className="titleHome">
          <h1>Game Center</h1>
          <h4>Are you ready to play?</h4>
        </div>
        <h2>MOST PLAYED GAMES</h2>
        <div className="photoContainerHome">
          {bestGame.map((e, i) => (
          <>
{/*             <FotoHome photo={e.photo} name={e.name} > */}
<DescriptionHome photo={e.photo} name={e.name}/>
          
            </>
          ))}
        </div>
      </div>
      <div className="divHome2">
            <Swiper
              style={{padding:"8rem 8rem"}}
              spaceBetween={5}
              slidesPerView={4}
              onSlideChange={()=>console.log('slide change')}
              onSwiper={(swiper)=>console.log(swiper)}
              >
               {game.map((e) => (
                <SwiperSlide style={{width:"20rem" ,minHeight:"20rem"}}> 
                   <FotoHome photo={e.photo} name={e.name} />
                </SwiperSlide>                
                ))} 
            </Swiper>
      </div>
    </>
  );
}
