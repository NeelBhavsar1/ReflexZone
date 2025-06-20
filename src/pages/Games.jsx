import React from 'react'
import '../index.css'
import GameBox from '../components/Gamebox'


const Games = () => {
  return (
    <div>
      <div className='games-information'>
        <h1>Game Modes</h1>
        <p>Choose from a variety of fast-paced training exercises designed to sharpen your reflexes, improve aim precision, and boost your reaction time. Each mode offers unique challenges to keep your practice fun and effective.</p>
      </div>
      
      <div className='games-grid'>
        
        <GameBox 
        className='game-box'
        title="Clicks Per Second (CPS)"
        description="Test how many clicks you can make in one minute to measure your speed."
        path="/clicks-per-second-challenge"
        />

        <GameBox 
        className='game-box'
        title="Precision"
        description="Sharpen your aim by hitting all stationary targets with precision."
        path="/precision-challenge"
        />

        <GameBox 
        className='game-box'
        title="Moving Targets"
        description="Challenge your accuracy by shooting targets that move unpredictably."
        path="/moving-targets-challenge"
        />

        <GameBox 
        className='game-box'
        title="Reaction Time Test"
        description="Measure how quickly you can respond to visual cues in this fast-paced test."
        path="/reaction-time-test"
        />


    
      </div>


    </div>
    
  )
}

export default Games