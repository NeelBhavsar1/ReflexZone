import React, { useEffect, useState } from 'react'
import './ToggleButton.css'

const ToggleButton = () => {

    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
      const savetoggle = localStorage.getItem('toggleState')
      if (savetoggle !== null) {
        setIsOn(savetoggle === 'true')
      }
    }, [])

    const toggle =() => {
      setIsOn(!isOn)

    }

    

  return (
    <div className='toggle-container'>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggle}>
        <div className="toggle-circle"></div>
      </div>

    </div>
  )
}

export default ToggleButton