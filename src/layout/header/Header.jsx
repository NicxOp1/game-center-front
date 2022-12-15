import React from "react";
import "./header.css";
import {  useSelector } from 'react-redux';
import { Link as LinkRouter } from 'react-router-dom'
import LogOut from "../../Components/LogOut";

export default function Header() {

  let { role, logged } = useSelector(state => state.userReducer)







  return (
    <div className="content-nav">
     
           <img className="image-logo" src="https://cdn.discordapp.com/attachments/1050918393156476943/1051951337958551613/logo-png.png" alt='logo'/>
          <div className="content-buttom-ancor">
            <LinkRouter to='/'  class="btn-header">HOME</LinkRouter>
            <LinkRouter to='' class="btn-header">STORE </LinkRouter>
            <LinkRouter  to='' class="btn-header">LIBRARY </LinkRouter>
            <LinkRouter to='' class="btn-header"> CART</LinkRouter>     
            {role==='admin' ?(  <LinkRouter to='/AddGame' class="btn-header"> ADD GAME </LinkRouter>)
              :(null)
            }     
          
            {/* <div className="nav-left"> */}

              { logged ?(
                <>
              <LinkRouter to='' class="btn-header"> PROFILE </LinkRouter>

                <LogOut props="btn-header"/>
                </>)
              :(<LinkRouter to='/SignInUp' class="btn-header"> JOIN </LinkRouter> )
              }
          
            {/* </div> */}

          </div>
 
     
        
     
    
   
   
    </div>
  );
}
