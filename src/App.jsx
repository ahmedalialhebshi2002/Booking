import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='home' element={< Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
