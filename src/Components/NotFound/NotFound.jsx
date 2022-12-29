import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import './notfound.css'

export default function NotFound() {
  return (
    <div className='background'>
      
        <h5 > This page doesn't exist... </h5>
        <h5>let's go   <LinkRouter to='/' className="link" > HOME </LinkRouter> ...Shall we?</h5>

        
        
    </div>
  )
}
