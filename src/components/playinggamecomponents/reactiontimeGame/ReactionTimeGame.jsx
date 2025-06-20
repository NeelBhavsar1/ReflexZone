import React, { useState } from 'react'
import './ReactionTimeGame.css'
import { useNavigate } from 'react-router-dom'


const ReactionTimeGame = () => {

  const navigate = useNavigate()

  const resetGame = () => {
  setGameStarted(false)
  setSignalShown(false)
  setStartTime(null)
  setReactionTime(0)
  setMessage("Click the box to start!")
  setClickable(true)
}

  const [reactionTime, setReactionTime] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [signalShown, setSignalShown] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [message, setMessage] = useState("Click the box to start")
  const [clickable, setClickable] = useState(true)


  const btnhandler = () => {

    if(!clickable) {
      return;
    }

    if (!gameStarted) {
      console.log("ReactionTime game has started!")
      setGameStarted(true)

      const randomDelay = Math.floor(Math.random() * 3000) + 2000;

      setTimeout(() => {
        setSignalShown(true)
        setStartTime(Date.now())
        setMessage("CLICK NOW!")
        setClickable(true)
      }, randomDelay)

    } else if (signalShown) {
      const endTime = Date.now()
      const timeTaken = endTime - startTime
      setReactionTime(timeTaken)
      setMessage(`Your reaction time was ${timeTaken}ms`)
      setClickable(false)
      
    } else {
      setMessage("Too soon! Wait for the green signal")
      setClickable(false)
 

    }
}



  return (
    <div className='reactiontimegame-container'>
      <div className="reactiontime-info">
        <h1>{message}</h1>
        <div className='btn-wrapper'>
          <button onClick={() => navigate('/games')}>Return to Games</button>
          <button onClick={resetGame}>Reset</button>
        </div>
        
      </div>

      <button 
      className={`reactiontime-clickbox ${message === "CLICK NOW!" ? 'signal-on' : ''}`}
      onClick={btnhandler}
      disabled={!clickable}>
        
      </button>
      
    </div>
  )
}

export default ReactionTimeGame