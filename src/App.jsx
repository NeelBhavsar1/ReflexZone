import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Games from './pages/Games'
import Statistics from './pages/Statistics'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import ClicksPerSecond from './pages/game-pages/ClicksPerSecond'
import Precision from './pages/game-pages/Precision'
import './index.css'
import MovingTargets from './pages/game-pages/MovingTargets'
import ReactionTime from './pages/game-pages/ReactionTime'
import Signin from './pages/Signin'

/* 
other links here such sign in, stats, settings have been removed due to insufficient knowledge
on how to code these, will possibly come back to this when ive learnt them all*/

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
        <Route path='/clicks-per-second-challenge' element={<ClicksPerSecond />}></Route>
        <Route path='/precision-challenge' element={<Precision />}></Route>
        <Route path='/moving-targets-challenge' element={<MovingTargets />}></Route>
        <Route path='/reaction-time-test' element={<ReactionTime />}></Route>
        <Route path='/signin' element={<Signin />}></Route>

        <Route path='*' element={<NotFound/>}></Route>

        

        
      </Routes>
      </div>
      
      
    </div>
  )
}

export default App