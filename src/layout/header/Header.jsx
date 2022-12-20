import React from "react";
import "./header.css";
import NavBar from "../../Components/Navigation/NavBar";
import MobileNav from "../../Components/Navigation/MobileNav";

export default function Header() {


  return (
    <div className="content-nav">
      
          <img src="https://cdn.discordapp.com/attachments/1050918393156476943/1051951337958551613/logo-png.png" alt='logo'/>

       
          <NavBar/>
         <MobileNav/>
   
    </div>
  );
}
