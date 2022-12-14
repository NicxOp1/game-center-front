import React from 'react'
import Header from './header/Header'
import { Footer } from './footer/Footer'
import Arrow from './footer/Arrow'
export default function Layout(props) {
  return (
    <div className='App'>
        <Arrow/>
        <Header/>
        {props.children}
        <Footer/>
        
    </div>
  )
}
