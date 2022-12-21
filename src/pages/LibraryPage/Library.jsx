import React from "react";
import CardGames from "../../Components/CardGames/CardGames";
import { games } from "../../data/games";
import "./library.css";

export default function Library() {
  return (
    <>
      <div className="content-library">
        <div className="content-title-library">
          <h1 className="first-title-library">Library of your Games</h1>
        </div>
        <div className="content-btn-cards-library">
          <div className="content-myfavority-library">
            <div className="title-library-one">
              <h3 title-library-card>My Favoritys</h3>
            </div>
            <div className="cont-card-library-one">
              {games.map((e) => (
                <CardGames
                  name={e.name}
                  category={e.category}
                  img={e.photo}
                  price={e.price}
                />
              ))}
            </div>
          </div>
        </div>
        {/* arreglar logica */}
        <div className="content-btn-cards-library">
          <div className="content-myfavority-library">
            <div className="title-library-one">
              <h3 title-library-card>My Games</h3>
            </div>
            <div className="cont-card-library-one">
              {games.map((e) => (
                <CardGames
                  name={e.name}
                  category={e.category}
                  img={e.photo}
                  price={e.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
