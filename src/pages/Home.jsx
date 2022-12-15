import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "boxicons";
import "./home.css";
import FotoHome from "../Components/PhotoHome";
import gamesActions from "../Redux/Actions/gamesActions";

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
          {bestGame.map((e) => (
            <FotoHome photo={e.photo} name={e.name} />
          ))}
        </div>
      </div>
      <div className="divHome2">
        {/*       <h2>Action games</h2>
        <div className="photoContainerHome">
        </div> */}
      </div>
    </>
  );
}
