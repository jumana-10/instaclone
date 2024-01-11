import React from "react";
import "./Create.css";
import Sidenav from "../Homepage/Sidenav";

const Create = () => {
  
  return (
    <div className="container">
      <div> <Sidenav /> </div>
      <div className="create-card">
        <div className="createCard-header">
          <span>Create New Post</span>
          <hr/>
        </div>
        <p>Drag Photo and Videos here</p>
        <button>
          Select From Computer 
        </button>
        {/* <div className="create-profile">
          <span>Add profile</span>
          <input type="text" placeholder="Add username" />
          <input type="email" placeholder=" Add email" />
          <input type="text" placeholder="Add mobile number" />
          <input type="text" id="address" placeholder="Add post" />

          <button type="submit">updated</button>
        </div> */}
      </div>
    </div>
  );
};

export default Create;