import React from "react";
import "./footer.css";
import Arrow from "./Arrow";
function Footer() {
  return (
    <>
      <footer>
        <div className="cont-lengu">
          <div className="front">
            <h4>Front</h4>
            <div className="cont-img-footer">
              <img
                className="img-footer-leng"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react-native"
              />
            </div>
            <div className="cont-img-footer">
              <img
                className="img-footer-leng"
                src="https://camo.githubusercontent.com/5c92eeb467fd5d2b1ef1c560e3c3c2f758a8d4e03a8136bda7b41a2d3d4a1b59/68747470733a2f2f72656163746e61746976652e6465762f696d672f6865616465725f6c6f676f2e737667"
                alt="react"
              />
            </div>
            <div className="cont-img-footer">
              <img
                className="img-footer-leng"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
              />
            </div>
          </div>
        </div>
        <div className="content-footer">
          <div className="content-info-footer">
            <div className="slogan-footer">
              <div className="content-logo-footer">
                <img
                  className="img-foter"
                  src="https://cdn.discordapp.com/attachments/1050918393156476943/1051951337958551613/logo-png.png"
                  alt="logo"
                />
              </div>
              <h4 className="text-footer">
                All your favorite games on GAMECENTER
              </h4>
              <h4 className="text-footer">
                ©2022 GameCenter Entertainment, Inc. All rights reserved.
              </h4>
              <h4 className="text-footer">
                All application components referenced in their respective Git
                Hubs.
              </h4>
              <div className="conten-git">
                <div className="github-footer">
                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/Cornicheli"
                      target="_blank"
                    >
                      Gabriel
                    </a>
                  </p>
                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/cesar-trigo"
                      target="_blank"
                    >
                      Cesar
                    </a>
                  </p>
                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/LailaJalil"
                      target="_blank"
                    >
                      Laila
                    </a>
                  </p>

                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/pungitoregerman"
                      target="_blank"
                    >
                      German
                    </a>
                  </p>
                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/aldanamagalicb"
                      target="_blank"
                    >
                      Aldana
                    </a>
                  </p>
                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/NicxOp1"
                      target="_blank"
                    >
                      Nicolas
                    </a>
                  </p>
                  <p className="text-footer">
                    <a
                      className="text-footer"
                      href="https://github.com/RamiroRojas02"
                      target="_blank"
                    >
                      Ramiro
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cont-back-footer">
          <h4>Back</h4>
          <div className="cont-img-footer">
            <img
              className="img-footer-leng"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
            />
          </div>
          <div className="cont-img-footer">
            <img
              className="img-footer-leng"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
            />
          </div>
          <div className="cont-img-footer">
            <img
              className="img-footer-leng"
              src="https://assets.stickpng.com/thumbs/62cc1b51150d5de9a3dad5f8.png"
              alt="postman"
            />
          </div>
        </div>
        <Arrow />
      </footer>
    </>
  );
}
export { Footer };
