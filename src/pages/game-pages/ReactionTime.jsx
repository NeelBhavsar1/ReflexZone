import React from 'react'
import GameScreen from '../../components/GameScreen'
import '../../index.css'
import ReactionTimeGame from '../../components/playinggamecomponents/reactiontimeGame/ReactionTimeGame'
import { useState } from 'react'

const ReactionTime = () => {

  const [isPlaying, setIsPlaying] = useState(false)

  const handleStart = () => {
    setIsPlaying(!isPlaying);
  }
  
  return (
    <div>

      {isPlaying ? (
        <ReactionTimeGame />
      ) : (
        <GameScreen 
        title="Reaction Time test" 
        description="Press the 'Start' button and react as quickly as possible when the screen changes — this test measures your reflex speed and helps you improve your reaction time."
        onStart={handleStart}
      />
      )
    
    }

    </div>
  )
}

export default ReactionTime