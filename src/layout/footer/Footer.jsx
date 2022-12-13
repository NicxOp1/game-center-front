import React from "react";
import "./footer.css";
import Arrow from "./Arrow";
function Footer() {
  return (
    <footer>
      <div className="github-footer">
        <h3 className="title-footer">Git Hub</h3>
        <div className="content-github">
          <div className="ancor-github">
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
          </div>
          <div className="ancor-github">
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
      <div className="github-footer">
        <h3 className="title-footer">Linkedin</h3>
        <div className="content-github">
          <div className="ancor-github">
            <p className="text-footer">Gabriel</p>
            <p className="text-footer">Cesar</p>
            <p className="text-footer">Laila</p>
          </div>
          <div className="ancor-github">
            <p className="text-footer">German</p>
            <p className="text-footer">Aldana</p>
            <p className="text-footer">Nicolas</p>
            <p className="text-footer">Ramiro</p>
          </div>
        </div>
      </div>
      <div className="info">
        <h3 className="title-footer">Methods of payment</h3>
        <p className="text-footer">Debit</p>
        <p className="text-footer">Credit</p>
        <p className="text-footer">Transfer</p>
      </div>
      <Arrow />
    </footer>
  );
}
export { Footer };
