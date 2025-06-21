import React, { useEffect, useState } from 'react'
import './PrecisionGame.css'
import PrecisionGameEnd from './PrecisionGameEnd'

const PrecisionGame = () => {


  const [dots, setDots] = useState([]) 
  const [hits, setHits] = useState(0)
  const [clicksFired, setClicksFired] = useState(0)

  //timer usestates
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [duratedTime, setDuratedTime] = useState(null)

  //game state
  const [gameOver, setGameOver] = useState(false)

  const [gameMode, setGameMode] = useState(null)

  const accuracy = clicksFired === 0 ? 0 : ((hits / clicksFired) * 100).toFixed(1)


  const generateRandomDots = (count, gameMode) => {
    const boxWidth = 600
    const boxHeight = 400
    const dotSize = 30

    const newDots = []

    for (let i = 0; i < count; i++) {
      //constraints for spawning dots in the container, code below
      const left = Math.random() * (boxWidth - dotSize)
      const top = Math.random() * (boxHeight - dotSize)

      const dot = {
        id: i,
        left: left,
        top: top,
      }
      newDots.push(dot)
    }
    setDots(newDots)

    setHits(0)
    setClicksFired(0)
    setStartTime(null)
    setEndTime(null)
    setDuratedTime(null)
    setGameOver(false)
    setGameMode(gameMode)
  }

  const handleDotClick = (id) => {
    if (!startTime) {
      setStartTime(Date.now())
    }

    setHits(hits + 1)
    setClicksFired(clicksFired + 1)
    setDots((prev) => {
      const updatedDots = prev.filter((dot) => dot.id !== id)

      if (updatedDots.length === 0) {
        const finishedTime = Date.now()
        setEndTime(finishedTime)
        setDuratedTime(((finishedTime - startTime) / 1000).toFixed(2))
        setGameOver(true)
      }

      return updatedDots

    })
      



    
  }

  const handleBoxClick = (e) => {
    if (dots.length > 0 && !e.target.classList.contains('precision-dot')) {
      setClicksFired(clicksFired + 1)
    }
  }

  useEffect(() => {
    generateRandomDots(0)
  }, [])

  return (
    <div className='precision-container'>


        {!gameOver && (
          <>
            <div className='precision-info'>
              <h1>Precision shooting!</h1>
              <p>Shoot as many targets as you can with the highest accuracy!</p>
            </div>

            <div className='precision-buttons-mode'>
              <button onClick={() => generateRandomDots(5, 'Easy')}>Easy Mode</button>
              <button onClick={() => generateRandomDots(10, 'Medium')}>Medium Mode</button>
              <button onClick={() => generateRandomDots(20, 'Hard')}>Hard Mode</button>
            </div>

        
            <div className='precision-box' onClick={handleBoxClick}>

              {(() => {
                const dotElements = []

                for (let i = 0; i < dots.length; i++) {
                  const dot = dots[i]
                  
                  const dotStyle = {
                    top: dot.top + 'px',
                    left: dot.left + 'px'
                  }
                  dotElements.push(
                    <div
                      key={dot.id}                
                      className='precision-dot'  
                      style={dotStyle}           
                      onClick={() => handleDotClick(dot.id)}  
                    ></div>
                  )
                }
                return dotElements
              })()}
            </div>
          </>
        )}

        {gameOver && (
      <PrecisionGameEnd 
        accuracy={accuracy}
        timeTaken={duratedTime}
        onPlayAgain={() => generateRandomDots()} 
        gameMode = {gameMode}
      />        
      )}

    </div>
  )
}

export default PrecisionGame