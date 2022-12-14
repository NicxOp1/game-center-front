import React from 'react'
import Header from './Header/Header'
import { Footer } from './Footer/Footer'
import Arrow from './Footer/Arrow'
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
