import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

//Reusable component for displaying content in the gamescreen
const Gamebox = ({ title, path, description }) => {
  return (
    
    <Link to={path} className='game-box'>
      <div className='gamebox-title'>{title}</div>
      <p className='gamebox-desc'>{description}</p>
    </Link>
   
  )
}

export default Gamebox