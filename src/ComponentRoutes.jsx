import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignInUp from './pages/SignInUp'
export default function ComponentRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/SignInUp' element= {<SignInUp/>}/>
    </Routes>
  )
}
