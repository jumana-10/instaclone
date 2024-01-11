import React, { useRef, useState, useEffect } from 'react';
import "./video.css";
import Footer from './Footer';

// Assuming you have a specific video file, adjust the import accordingly
import video from "../Reels video/Reel1.mp4";

function Video({ channel, song, url, likes, comment, shares }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("video-container");

    const handleScroll = () => {
      if (isVideoPlaying) {
        vidRef.current.pause();
        setIsVideoPlaying(false);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Cleanup event listener on component unmount
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isVideoPlaying]);

  return (
    <div className='video-cards'>
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={video}
        loop
      />
      <Footer
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}

export default Video;
