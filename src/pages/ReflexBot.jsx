import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user_icon from '../assets/user.png';
import enter_key from '../assets/enter.png';
import { askGemini } from './gemeniApi'; 
import { text } from 'framer-motion/client';
import ReactMarkDown from 'react-markdown'

const ReflexBot = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([
    {type: 'ai', text: 'Hello, I am ReflexBot, How can I help you today?'}
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessage((prev) => [...prev, userMessage]);
    setInput('');

    const gameInfo = 'This is an aim trainer, created to practise aim training and acuracy. There are currently 3 game modes right now: Clicks Per Second (CPS); Precision with 3 difficuly levels (easy, medium, hard); a reaction time test. ';
    const creatorInfo = 'Created by Neel Bhavsar, a passionate gamer and aspiring front-end developer.';


    const aiReply = await askGemini(input, gameInfo, creatorInfo);
    const aiMessage = { type: 'ai', text: aiReply };

    setMessage((prev) => [...prev, aiMessage]);
  };

  return (
    <>
      <div className="chat-container">
        <div className="chatbox">
          <div className="chatbox-top">
            <p className="robot-icon">🤖</p>
            <p>ReflexBot</p>
          </div>

          <div className="seperator"></div>

          <div className="chatbox-mid">
            {message.map((msg, index) =>
              msg.type === 'ai' ? (
                <div className="message-ai" key={index}>
                  <p className="ai-icon">🤖</p>
                  <div className="markdown"><ReactMarkDown>{msg.text}</ReactMarkDown></div>
                  
                </div>
              ) : (
                <div className="message-own" key={index}>
                  <p>{msg.text}</p>
                  <img src={user_icon} alt="user icon" />
                </div>
              )
            )}
          </div>

          <div className="chatbox-btm">
            <input
              type="text"
              placeholder="Enter text..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <img src={enter_key} alt="submit-icon" onClick={handleSend} />
          </div>
        </div>
      </div>

      <div className="homebtn">
        <button onClick={() => navigate('/')}>Go back Home</button>
      </div>
    </>
  );
};

export default ReflexBot;
