import React, { useState } from 'react'
import GameScreen from '../../components/GameScreen'
import '../../index.css'
import CpsGame from '../../components/playinggamecomponents/cpsGame/CpsGame';


const ClicksPerSecond = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    setIsPlaying(!isPlaying)
    console.log("Game state: True")

  }

  return (
    <div>
      { !isPlaying ? (
        <GameScreen 
        title="Clicks Per Second (CPS)" 
        description="Click the 'Click to Play' button and tap as fast as you can in 60 seconds — your clicks per second (CPS) score will be calculated based on how many times you click in a minute."
        onStart={handleStart}
        />

        ) : (
          <CpsGame />
        )
      
      }
      
    </div>
  )
}

export default ClicksPerSecond