import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="content-nav">
      <div className="content-image-logo">
        <img
          className="image-logo"
          src="https://cdn.discordapp.com/attachments/1050918393156476943/1051951337958551613/logo-png.png"
        />
      </div>
      <ul className="nav">
        <li className="content-buttom-ancor">
          <button class="btn-header">
            <a className="ancor-home" href="-">
              HOME
            </a>
          </button>
        </li>
        <li className="content-buttom-ancor">
          <button class="btn-header">
            <a className="ancor-home" href="-">
              STORE
            </a>
          </button>
        </li>
        <li className="content-buttom-ancor">
          <button class="btn-header">
            <a className="ancor-home" href="-">
              LIBRARY
            </a>
          </button>
        </li>
      </ul>
      <ul className="nav">
        <li className="content-buttom-ancor">
          <button class="btn-header">
            <a className="ancor-home" href="-">
              PROFILE
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
