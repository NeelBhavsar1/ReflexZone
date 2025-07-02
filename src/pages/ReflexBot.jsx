import React from 'react'
import { useNavigate } from 'react-router-dom'
import user_icon from '../assets/user.png'
import enter_key from '../assets/enter.png'

const ReflexBot = () => {

    const navigate = useNavigate()

  return (
    <>
    <div className="chat-container">
        <div className="chatbox">
            <div className="chatbox-top">
                <p className='robot-icon'>🤖</p>
                <p>ReflexBot</p>
            </div>
            <div className="seperator"></div>
            <div className="chatbox-mid">
                <div className="message-ai">
                    <p className='ai-icon'>🤖</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore dignissimos pariatur laboriosam autem! Alias quae repellat laborum quibusdam corrupti nulla vitae magnam molestias asperiores? Numquam commodi perspiciatis eum magnam.</p>
                </div>
                <div className="message-own">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facere a autem non reiciendis dicta illo expedita laboriosam ipsa accusantium. Repellat, natus explicabo? Expedita, cumque? Placeat dolor maiores sunt magnam.</p>
                    <img src={user_icon} alt="user-image" />
                </div>
                <div className="message-ai">
                    <p className='ai-icon'>🤖</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore dignissimos pariatur laboriosam autem! Alias quae repellat laborum quibusdam corrupti nulla vitae magnam molestias asperiores? Numquam commodi perspiciatis eum magnam.</p>
                </div>
                <div className="message-own">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod facere a autem non reiciendis dicta illo expedita laboriosam ipsa accusantium. Repellat, natus explicabo? Expedita, cumque? Placeat dolor maiores sunt magnam.</p>
                    <img src={user_icon} alt="user-image" />
                </div>
            </div>
            <div className="chatbox-btm">
                <input type="text" placeholder='Enter text...'/>
                <img src={enter_key} alt="submit-icon" />
            </div>


        </div>



        
    </div>
    <div className="homebtn">
            <button onClick={() => navigate('/')}>Go back Home</button>
    </div>
    </>
  )
}

export default ReflexBot