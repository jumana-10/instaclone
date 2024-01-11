import React from 'react'
import "./Home.css"
//import Sidebar from "../Sidenav pct/Sidebar"
import Timeline from '../Homepage/Timeline'
import Sidenav from '../Homepage/Sidenav'

function Home() {
  return (
    <div className='homepage'>
        <div className="homepage_sidebar">
        <Sidenav />
        </div>
        <div className="homepage_timeline">
        <Timeline />
        </div>
    </div>
  )
}

export default Home