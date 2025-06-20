import React, { useState } from 'react'
import '../../index.css'
import GameScreen from '../../components/GameScreen'


const Precision = () => {

  return (

    <div>
      <GameScreen 
      title="Precision shooting" 
      description="Click the 'Click to Play' button and tap as fast as you can in 60 seconds — your clicks per second (CPS) score will be calculated based on how many times you click in a minute."
      
      />
    </div>
  )
}

export default Precision