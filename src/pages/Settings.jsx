import React, { useEffect, useState } from 'react'
import '../index.css'
import ToggleButton from '../components/ToggleButton/ToggleButton'

const Settings = () => {

  return (
    <>

      <div className="settings-container">
        <div className="settings-info">
          <h1>Settings</h1>
          <p>Customize your ReflexZone experience. Adjust sound and visual preferences, manage notifications, and update your account details here. Make the app work the way you like it!</p>
        </div>

        <div className="container-settings">
          <div className="container-item">
            <p>Light mode / Dark mode</p>
            <ToggleButton />
          </div>
          <div className="container-item">
            <p>Enable / disable background music</p>
            <ToggleButton />
          </div>
          <div className="container-item">
            <p>Enable / disable sound effects</p>
            <ToggleButton />
          </div>
        </div>
        

    </div>

    </>
    
  )
}

export default Settings