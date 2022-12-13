import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="content-home-main">
        <h1 className="main-title-home">The most outstanding</h1>
        <section className="content-home-1">
          <section className="content-home-2">
            <div class="cards">
              <figure class="card">
                <h3 className="title-home">Valorant</h3>
                <video className="video-home" autoPlay loop muted>
                  <source
                    src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </section>
          <section className="content-home-2">
            <div class="cards">
              <figure class="card">
                <h3 className="title-home">Counter-Strike:GO</h3>
                <video className="video-home" autoPlay loop muted>
                  <source
                    src="https://cdn.akamai.steamstatic.com/steam/apps/81958/movie_max.webm?t=1554409259"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </section>
          <section className="content-home-2">
            <div class="cards">
              <figure class="card">
                <h3 className="title-home">Need For Speed Heat</h3>
                <video className="video-home" autoPlay loop muted>
                  <source
                    src="https://cdn.akamai.steamstatic.com/steam/apps/256823664/movie480_vp9.webm?t=1614187437"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </section>
          <section className="content-home-2">
            <div class="cards">
              <figure class="card">
                <h3 className="title-home">Resident Evil Village</h3>
                <video className="video-home" autoPlay loop muted>
                  <source
                    src="https://cdn.akamai.steamstatic.com/steam/apps/256825282/movie480_vp9.webm?t=1615523833"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </section>
          <section className="content-home-2">
            <div class="cards">
              <figure class="card">
                <h3 className="title-home">Stray</h3>
                <video className="video-home" autoPlay loop muted>
                  <source
                    src="https://cdn.akamai.steamstatic.com/steam/apps/256786641/movie480_vp9.webm?t=1591910393"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
