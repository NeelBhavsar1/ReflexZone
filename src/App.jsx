import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Games from './pages/Games'
import Statistics from './pages/Statistics'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import './index.css'



const App = () => {
  return (
    <div>
      <NavBar />
      <div className='router-container'>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/games' element={<Games />}></Route>
        <Route path='/statistics' element={<Statistics />}></Route>
        <Route path='/settings' element={<Settings />}></Route>

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </div>
      
      
    </div>
  )
}

export default App