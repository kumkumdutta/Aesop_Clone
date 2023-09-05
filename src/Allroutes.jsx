import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavElem } from './components/NavElem'
import { Home } from './Pages/Home'
import { Test } from './Pages/Test'


export const Allroutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/t' element={<Test/>}/>
    <Route path='/elem' element={<NavElem/>}/>

   </Routes>
  )
}
