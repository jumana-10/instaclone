import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Story.css';

const Story = ({ stories }) => {
  return (
    <div className="story_avatars">
      {stories.map((story, index) => (
        <div key={index} className="story_avatar">
          <Avatar src={story.avatar} alt={`Story ${index + 1}`} />
          <span>{story.user}</span>
        </div>
      ))}
    </div>
  );
};

export default Story;
