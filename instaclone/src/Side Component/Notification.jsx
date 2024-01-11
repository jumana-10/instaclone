import React from 'react';
import Sidenav from '../Homepage/Sidenav';
import './Notification.css';

function Notification() {
  return (
    <div className="notification-container">
      <div> <Sidenav /> </div>
      <div className="content-container">
        <div className="Heading">
          <h1>Notification</h1>
          <h3>This Week</h3>
          <hr></hr>
        <div className='n-box'>
          <h2>John_ss  <button>Follow</button> </h2>
          <p>Following you </p>
        </div>

        <div className='n-box'>
          <h2>design_dev  <button>Follow</button> </h2>
          <p>Following you</p>
        </div>

        <div className='n-box'>
          <h2>Ram_10  <button>Follow</button> </h2>
          <p>Following you</p>
        </div>

        <div className='n-box'>
          <h2>_Ramya  <button>Follow</button> </h2>
          <p>Following you</p>
        </div>

        <div className='n-box'>
          <h2>Gayu_fav <button>Follow</button> </h2>
          <p>Following you</p>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Notification;
