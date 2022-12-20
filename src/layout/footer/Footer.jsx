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
      <div className="content-aboutUs">
        <h3 className="title-footer">Contact</h3>
<div className="content-footer">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Have you any question?</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        </div>
      </div>
      <div className="content-aboutUs">
        <h3 className="title-footer">Pages</h3>
        <div className="content-all">
        <div className="content-footer">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Store">Store</a>
        </li>
        <li>
          <a href="/SignInUp">Sign in & Sign up</a>
        </li></div>
        <div className="content-footer">
        <li>
          <a href="/Library">Library</a>
        </li>
        <li>
          <a href="/Cart">Cart</a>
        </li>
        </div>
        </div>
      </div>
{/*       <div className="info">
        <h3 className="title-footer">Methods of payment</h3>
        <div className="content-github">
        <p className="text-footer">Debit</p>
        <p className="text-footer">Credit</p>
        <p className="text-footer">Transfer</p>
        </div>
      </div> */}
      <Arrow />
    </footer>
  );
}
export { Footer };
