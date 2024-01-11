import React from "react";
import "./Post.css"
import { Avatar } from "@mui/material";
//import  MoreHorizIcon  from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user, postImage, likes, timestamp}) {
    return (
        <div className="post">
            <div className="postHeader">
                <div className="post_headerAvatar">
                    <Avatar name = {user.charAt(0).toUpperCase()} ></Avatar>
                    {user} • <span>{timestamp}</span>


                    {/* <Avatar>{username}</Avatar>
                    {user && <span>{user} • </span>}
                    <span>{timestamp}</span> */}
                </div>

                {/* <MoreHorizIcon /> */}
            </div>
                
            <div className="postImg">
                <img 
                src={postImage}
                alt="Post Image" />
            </div>
            <div className="postFooter">
                <div className="post_footerIcons">
                    <div className="post_iconsMain">
                        <FavoriteBorderIcon className="postIcon" />
                        <ChatBubbleOutlineIcon className="postIcon" />
                        <TelegramIcon className="postIcon" />
                    </div>
                    <div className="post_iconSave">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
                Liked by {likes} people
            </div>
        </div>
    )
}
export default Post;