import React from 'react'
import "./ChatBotStart.css"
function ChatBotStart({onStartChat}) {


  return (
    <div className='start-page'>
      <button className="start-page-btn" onClick={onStartChat}>Chat AI</button>
    </div>
  )
}

export default ChatBotStart
