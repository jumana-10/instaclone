import React from "react";

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
//import { Button } from "@material-ui/core";

//import { Favorite, Comment, Send } from "@material-ui/icons";

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <RadioButtonCheckedIcon >
            <h4 style={{ color: "white" }}>Follow</h4>
          </RadioButtonCheckedIcon >
        </h3>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <FavoriteBorderIcon />
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <ChatBubbleOutlineIcon />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <SendIcon />
          {shares}
        </div>
      </div>
    </div>
  );
}
