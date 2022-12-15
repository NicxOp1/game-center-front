import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignInUp from './pages/SignInUp'
import AddGame from './pages/AddGame'

export default function ComponentRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/SignInUp' element= {<SignInUp/>}/>
        <Route path='/AddGame' element= {<AddGame/>}/>
    </Routes>
  )
}
