import React from 'react'
import './CpsGame.css'
import { useNavigate } from 'react-router-dom'

const CpsGameEnd = ({ clicks, onPlayAgain }) => {

  const cps = (clicks / 10).toFixed(2)

  const navigate = useNavigate()

  return (
    <div className='cps-end-container'>
        <div className="cps-end-info">
            <h1>Game over!</h1>
            <p>Total number of clicks: {clicks}</p>
            <p>Clicks per second: {cps} </p>
        </div>

        <div className='cps-end-buttons'>
          <button onClick={() => navigate('/games')}>Return to Games</button>
          <button onClick={onPlayAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default CpsGameEnd