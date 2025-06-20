import React from 'react'
import '../index.css'

const Home = () => {
  return (
    <div className='home-welcome'>
        <h1>Welcome!</h1>
        <p>ReflexZone is a modern aim training web application designed to help users improve their reflexes, hand-eye coordination, and mouse accuracy. Whether you're a gamer, esports enthusiast, or just someone looking to sharpen your reaction time, ReflexZone offers a clean, user-friendly interface with a variety of fast-paced training games and performance statistics to track your progress. Built using React for speed and responsiveness, ReflexZone focuses on simplicity, precision, and improvement through consistent practice.</p>
        <br />
        <p>Users can sign in to track their performance over time. Once logged in, ReflexZone will automatically record your high scores, accuracy, and improvement across different training modes. Your personal statistics dashboard lets you monitor progress and compete with yourself for better results with every session. Future updates will include saved settings, achievements, and competitive leaderboards.</p>
    </div>
  )
}

export default Home