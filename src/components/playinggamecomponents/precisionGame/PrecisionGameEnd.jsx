import React from 'react'
import './PrecisionGame.css'
import { useNavigate } from 'react-router-dom'

const PrecisionGameEnd = ({ accuracy, timeTaken, onPlayAgain, gameMode}) => {

    const navigate = useNavigate()

  return (
    <div className='precision-game-end-container'>
        <div className="precision-game-end-info">
            <h1>Game over!</h1>
            <p>Game Mode: <span>{gameMode}</span></p>
            <p>Accuracy: <span>{accuracy}%</span></p>
            <p>Total time elapsed: <span>{timeTaken} seconds</span></p>
        </div>

        <div className='precision-game-end-buttons'>
          <button onClick={() => navigate('/games')}>Return to Games</button>
          <button onClick={onPlayAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default PrecisionGameEnd