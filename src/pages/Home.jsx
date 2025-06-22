import React from 'react'
import '../index.css'

import crown_icon from '../assets/crown.png'
import muscle_icon from '../assets/muscles.png'
import timer_icon from '../assets/chronometer.png'

const Home = () => {
  return (
    <div className='container'>
      <div className="home-welcome">
        <h1>Welcome!</h1>
        <p>ReflexZone is a modern aim training web application designed to help users improve their reflexes, hand-eye coordination, and mouse accuracy. Whether you're a gamer, esports enthusiast, or just someone looking to sharpen your reaction time, ReflexZone offers a clean, user-friendly interface with a variety of fast-paced training games and performance statistics to track your progress. Built using React for speed and responsiveness, ReflexZone focuses on simplicity, precision, and improvement through consistent practice.</p>
        
      </div>
      <div className="info-container">
        <div className="info-item">
          <h3>
            <img src={crown_icon} alt="crown icon" />
            Train like a pro
          </h3>
          
          <div className="underline">
            <p></p>
          </div>
          <p>Top esports players use aim trainers daily. ReflexZone brings you the same kind of practice they rely on—right in your browser.</p>
        </div>
        <div className="info-item">
          <h3>
            <img src={muscle_icon} alt="muscle icon" />
            Build Muscle Memory
          </h3>
          
          <div className="underline">
            <p></p>
          </div>
          <p>Consistent practice helps you develop precise hand-eye coordination, which is key for hitting targets quickly and accurately in real games.</p>
        </div>
        <div className="info-item">
          <h3>
            <img src={timer_icon} alt="timer icon" />
            Improve Reaction Speed
          </h3>
    
          <div className="underline">
            <p></p>
          </div>
          <p>Sharpen your reflexes with fast-paced scenarios that challenge your ability to respond instantly—perfect for FPS gamers or anyone looking to boost mental alertness.</p>
        </div>
        
      </div>
        
    </div>
  )
}

export default Home