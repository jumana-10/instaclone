import React from 'react'
import "./Message.css"
import Sidenav from '../Homepage/Sidenav'
import { Avatar } from '@mui/material'

function Message() {
  return (
    <div className="message-container">
      <div> <Sidenav /> </div>
      <div className="contentMsg-container">
        <div className='Card'>
          <p className='Msg'>Messages 
          <span className='Req'>Requests</span></p>

        <div className="Msg-card">
          <Avatar 
          src='https://images.unsplash.com/photo-1582883693742-5d25fbef2c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvfGVufDB8fDB8fHww' 
          alt='Avatar image' />
          <div className="Msg-content">
            <h2>John</h2>
            <p className='Bio'>Active 1hr ago</p>
          </div>  
        </div>

        <div className="Msg-card">
          <Avatar 
          src='https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8fDA%3D'
           alt='Avatar image' />
          <div className="Msg-content">
            <h2>Movie_buff</h2>
            <p className='Bio'>Active 50m ago</p>
          </div>  
        </div>

        <div className="Msg-card">
          <Avatar 
          src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvZGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D' 
          alt='Avatar image' />
          <div className="Msg-content">
            <h2>code_love</h2>
            <p className='Bio'>Active yesterday</p>
          </div>  
        </div>

        <div className="Msg-card">
          <Avatar 
          src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlnbWF8ZW58MHx8MHx8fDA%3D' 
          alt='Avatar image' />
          <div className="Msg-content">
            <h2>Figma</h2>
            <p className='Bio'>Active 4hr ago</p>
          </div>  
        </div>

        <div className="Msg-card">
          <Avatar 
          src='https://images.unsplash.com/photo-1605270854320-07767ebafa10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3RvfGVufDB8fDB8fHww' 
          alt='Avatar image' />
          <div className="Msg-content">
            <h2>travel_always</h2>
            <p className='Bio'>Active now</p>
          </div>  
        </div>

        <div className="Msg-card">
          <Avatar 
          src='https://plus.unsplash.com/premium_photo-1665590827405-51810e1fa565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hbHxlbnwwfHwwfHx8MA%3D%3D' 
          alt='Avatar image' />
          <div className="Msg-content">
            <h2>Life_Goal</h2>
            <p className='Bio'>Active 2d ago</p>
          </div>  
        </div>

        </div>
      </div>
    </div>
  )
}

export default Message