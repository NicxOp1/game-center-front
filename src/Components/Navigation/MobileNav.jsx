import React from 'react'
import NavLinks from './NavLinks'
import './mobileNav.css'
import { useState } from 'react'

export default function MobileNav() {
    const [open, setOpen]= useState(false)
  return (
      <>
    <nav className='mobileNav'>
     <img src={open ?'/images/close.png' : '/images/hamburger.png'} onClick={()=>{ setOpen(!open)}}  alt='menu'/> 
    {open && 
    <div className='menu'>
    <NavLinks/>
    </div>}
    </nav>
    </>
  )
}
