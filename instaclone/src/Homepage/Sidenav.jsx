import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

function Sidenav() {

    const navigate = useNavigate();
    
        const handleLogout = () => {
          signOut(auth);
        };

        const handleSearch = () => {
            navigate("/Search");
        }

        const handleExplore = () => {
            navigate("/explore");
          };
        
          const handleCreate = () => {
            navigate("/create");
          };

          const handleReels = () => {
            navigate("/reels");
          };

          const handleMessages = () => {
            navigate("/Message");
          };
        
          const handleNotification = () => {
            navigate("/Notification");
          };

  return (
    <div className="sidenav">
        <img className='side_logo' 
       src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
       alt="Instagram Logo" />

     <div className='sidenav_buttons'>
         <button className='side_button'>
            <HomeIcon />
            <span>Home</span>
        </button>

        <button onClick={handleSearch} className='side_button'>
            <SearchIcon/>
            <span>Search</span>
        </button>

        <button onClick={handleExplore} className='side_button'>
            <ExploreIcon />
            <span>Explore</span>
        </button>

        <button onClick={handleReels} className='side_button'>
            <SlideshowIcon />
            <span>Reels</span>
        </button>

        <button onClick={handleMessages} className='side_button'>
            <ChatIcon />
            <span>Messages</span>
        </button>

        <button onClick={handleNotification} className='side_button'>
            <FavoriteBorderIcon />
            <span>Notification</span>
        </button>

        <button onClick={handleCreate} className='side_button'>
            <AddCircleOutlineIcon />
            <span>Create</span>
        </button>
     
        <button className='side_button'>
            
                {/* {user.username ? user.username.charAt(0).toUpperCase() : "J"} */}
             <Avatar name = {auth.currentUser?.displayName.charAt(0).toUpperCase()} >
            </Avatar>
            <span>
                {auth.currentUser?.displayName}
            <button onClick={handleLogout} className='logout_button'>Log out</button>
            </span>
        </button>
    </div>
    
        <div className='sidenav_more'>
            <button className='side_button'>
                <MenuIcon />
                <span className='sidenav_buttontext'>More</span>
            </button>
        </div>

    </div>
  );
}

export default Sidenav;