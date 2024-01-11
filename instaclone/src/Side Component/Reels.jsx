import React from "react";
import ReactPlayer from "react-player";
import "./Reels.css";
import Sidenav from "../Homepage/Sidenav";
import Reel1 from "../Reels video/Reel1.mp4"
import Reel2 from "../Reels video/Reel2.mp4" 
import Reel3 from "../Reels video/Reel3.mp4" 
import Reel4 from "../Reels video/Reel4.mp4" 
import Reel5 from "../Reels video/Reel5.mp4" 

const Reels = () => {
  const videoUrls = [
    "https://www.youtube.com/shorts/8lWwiRy0DJY?feature=share", 
    "https://www.youtube.com/shorts/NsqoVbGkqLE?feature=share",
    "https://www.youtube.com/shorts/YyFrdoD-Wjk?feature=share",
    "https://www.youtube.com/shorts/DL0HB_qlSVk?feature=share",
    "https://www.youtube.com/shorts/a0QNy9hbIvM?feature=share",
  ]; //ReactPlayervedios

  return (
    <div className="Reels-Container">
      <div> <Sidenav /> </div>
      <div className="reels-header">
        <div className="video-header">
          <video
            src={Reel1}
            height="600px"
            width="30%"
            controls
          ></video>
          <video
            src={Reel2}
            height="600px"
            width="30%"
            controls
          ></video>
          <video
            src={Reel3}
            height="600px"
            width="30%"
            controls
          ></video>
          <video
            src={Reel4}
            height="600px"
            width="30%"
            controls
          ></video>
          <video
            src={Reel5}
            height="600px"
            width="30%"
            controls
          ></video>

        {videoUrls.map((url, index) => (
            <ReactPlayer
              key={index}
              controls={true}
              url={url}
              height="600px"
              width="30%"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reels;



// import Video from "../Reels video/Video";

// import vdo2 from "../Reels video/Reel1.mp4";
// import vdo3 from "../Reels video/Reel2.mp4";

// export default function Reels() {
//   const data = [
//     {
//       channel: "aaa",
//       song: "song-1",
//       url: vdo2, // Assuming vdo2 is the correct import
//       likes: "32",
//       comment: "2",
//       shares: "23",
//     },
//     {
//       channel: "bbb",
//       song: "song-2",
//       url: vdo3, // Assuming vdo3 is the correct import
//       likes: "3",
//       comment: "22",
//       shares: "23",
//     },
//     // Add more video data as needed
//   ];

//   return (
//     <div className="Reels">
//       <div className="video-container" id="video-container">
//         {data.map((list, i) => (
//           <Video
//             key={i}
//             channel={list.channel}
//             song={list.song}
//             url={list.url}
//             likes={list.likes}
//             comment={list.comment}
//             shares={list.shares}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



//export default Reels;






