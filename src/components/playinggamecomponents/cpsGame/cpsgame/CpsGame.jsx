import React, { use, useEffect, useState } from 'react'
import './CpsGame.css'
import CpsGameEnd from './CpsGameEnd'

const CpsGame = () => {

  const [clicks, setClicks] = useState(0)

  const [timeLeft, setTimeLeft] = useState(10)

  const [gameOver, setGameOver] = useState(false)

  const [hasStarted, setHasStarted] = useState(false)

  const btnhandler = () => {
    if(!hasStarted) {
      setHasStarted(true)
    }

    if (!gameOver) {
      setClicks(clicks + 1)
    }
  }

  

  useEffect(() => {

    if (!hasStarted || gameOver) {
      return;
    }

    if (timeLeft > 0) {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)


        return () => clearTimeout(timer)
    } else {
        setGameOver(true)
    }
  }, [timeLeft, hasStarted, gameOver])



  return (
    <div className='cpsgame-container'>
        {!gameOver ? (
            <>
            <div className='cpsgame-info'>
              <p>Number of times clicked: {clicks}</p>
              <p>Time remaining: {timeLeft}</p>
            </div>  

            <button className='cpsgame-clickbox' onClick={btnhandler}>Click me to play</button>

            </>

        ) : 

        <CpsGameEnd clicks={clicks} onPlayAgain={() => {
          setClicks(0);
          setTimeLeft(10);
          setGameOver(false);
          setHasStarted(false);
        }}/>
    }
        
        
    </div>
  )
}

export default CpsGame