import React from 'react'
import "./Suggestion.css"
import { Avatar } from '@mui/material'

function Suggestion() {
  return (
    <div className='suggestion'>
      <div className="story-profile">
        <Avatar>J</Avatar>
        <span>Jum_Hasin</span>
        <button>Switch</button>
      </div>

      <div className="suggestion_title">Suggestion for you</div>
      <div className="suggestion_usernames">


        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Jumana_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Reema_Renu</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Code_fun</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        <div className="suggest_username">
          <div className="username_left">
            <span className="avatar">
              <Avatar>T</Avatar>
            </span>
            <div className="username_info">
              <span className="username">Travel_love</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow_button">Follow</button>
        </div>

        
      </div>
    </div>
  )
}

export default Suggestion