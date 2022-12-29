import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import "boxicons";
import "./home.css";
import DescriptionHome from "../Components/DescriptionHome";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import gamesActions from "../Redux/Actions/gamesActions";
import FotoHome from "../Components/PhotoHome";
import logoTitle from'../data/logoTitle.png'


export default function Home() {
  let dispatch = useDispatch();
  const game = useSelector((state) => state.gamesReducer.game);
  const bestGame = useSelector((state) => state.gamesReducer.bestGame);
  let dato = { rate: "desc" };
  console.table(bestGame)
  useEffect(() => {
    dispatch(gamesActions.getGame());
    dispatch(gamesActions.filterGame(dato));
      console.log(bestGame)
     /* console.table(bestGame.map(e=>console.log(e.rate))); */
/*     console.table(bestGame); */
  }, []);

 let bestGameFiltered=game.slice(0,4)
 console.log(bestGameFiltered)

   let breakpoints={
      300: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      700: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      800: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1300: {
        slidesPerView:2,
        spaceBetween: 5
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      2000: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  

  return (
    <>
      <div className="divHome1">
        <div className="titleHome">
          <img src={logoTitle} alt="logo" />
          <h1>Are you ready to play?</h1>
          <LinkRouter to='/Store' style={{marginTop:"3rem",textDecoration:"none"}} class="btn-header">Go to store </LinkRouter>
        </div>
        <h2 className="h2Home1" style={{color:"white"}}>MOST PLAYED GAMES</h2>
        <div className="photoContainerHome">
          {bestGameFiltered.map((e) => (
          <>
{/*             <FotoHome photo={e.photo} name={e.name} > */}
<DescriptionHome photo={e.photo} name={e.name} rate={e.rate}/>
          
            </>
          ))}
        </div>
      </div>
      <div className="divHome2">
        <h4 style={{color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"5rem",
        fontSize:"3rem",
        }}>See more games</h4>
            <Swiper
              style={{padding:"2rem 1rem"}}
              spaceBetween={5}
              slidesPerView={4}
              breakpoints={breakpoints}
              onSlideChange={()=>console.log('slide change')}
              onSwiper={(swiper)=>console.log(swiper)}
              >
               {game.map((e) => (
                <SwiperSlide id="sSlide" style={{
                  padding:"1rem",height:"auto",
                  width:"auto" ,minHeight:"auto"}}> 
                   <FotoHome photo={e.photo} name={e.name} />
                </SwiperSlide>                
                ))} 
            </Swiper>
      </div>
    </>
  );
}
