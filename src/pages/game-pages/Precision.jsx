import React, { useState } from 'react'
import '../../index.css'
import GameScreen from '../../components/GameScreen'
import PrecisionGame from '../../components/playinggamecomponents/precisionGame/PrecisionGame'


const Precision = () => {

  const [isPlaying, setIsPlaying] = useState(false)

  const handleStart = () => {
    setIsPlaying(!isPlaying)
  }

  return (

    <div>

      {isPlaying ? (
        //find me in components / playinggamecomponents / precisionGame
        <PrecisionGame />
      ) : (

      <GameScreen 
      title="Precision shooting" 
      description="Click the 'Click to Play' button and accurately shoot all of the targets on the screen. There are currently 3 mode: Easy, Medium, and Hard. Choose the mode based on your confidence, the aim of the game is so increase your accuracy, so take all the time you need. Good luck!"
      onStart={handleStart}
      />

      )}
      
    </div>
  )
}

export default Precision