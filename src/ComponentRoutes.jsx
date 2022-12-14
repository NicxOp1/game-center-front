import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignInUp from './Pages/SignInUp'
export const ComponentRoutes=()=> {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/SignInUp' element= {<SignInUp/>}/>
    </Routes>
  )
}
