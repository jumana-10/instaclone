import React, { useState } from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import "./Suggestion.css"
import Story from '../Story/Story'
import Post from '../Post/Post'

function Timeline() {

  const [stories] = useState([
    { user: 'john', avatar: 'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' },
    { user: 'sony_R', avatar: 'https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'},
    { user: 'teddy_love', avatar: 'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww'},
    { user: 'code_fun', avatar: 'https://images.unsplash.com/photo-1699594165148-0eb85ec79666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D'},
    { user: 'design_love', avatar: 'https://images.unsplash.com/photo-1699148689335-16a572d22c22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'},
    { user: 'travel_vibe', avatar: 'https://images.unsplash.com/photo-1674864176821-3aa89b6fa9ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D'},
    { user: 'Apple', avatar: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww'},
    { user: 'Tesla', avatar: 'https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpdGh1YiUyMGxvZ298ZW58MHx8MHx8fDA%3D'},
    { user: 'Figma', avatar: 'https://images.unsplash.com/photo-1660806982611-0a41c0527966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmlnbWElMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'},
    { user: 'Github', avatar: 'https://images.unsplash.com/photo-1654277041218-84424c78f0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHViJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'},
    { user: 'David', avatar: 'https://images.unsplash.com/photo-1481567758055-3e8a6e89ca58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxvZ298ZW58MHx8MHx8fDA%3D'},
  ]);


  const [posts, setPosts] = useState([
  {
    user: "Jumana_TJ",
    postImage : 
    "https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D",
    likes :12,
    timestamp: "1d",
  },
  {
    user: "design__dev",
    postImage : 
    "https://images.unsplash.com/photo-1660806982611-0a41c0527966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2UlMjBmaWdtYXxlbnwwfHwwfHx8MA%3D%3D",
    likes :54,
    timestamp: "12h",
  },
  {
    user: "photography_love",
    postImage : 
    "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww",
    likes :12,
    timestamp: "2d",
  },
  {
    user: "Reema_",
    postImage : 
    "https://media.istockphoto.com/id/1546588905/photo/chatbot-ai-artificial-intelligence-digital-concept-innovations-and-technology.jpg?s=612x612&w=0&k=20&c=Ar9Y7tJvlzrcrp4Wa1ZqlWt7xmb2hVNeVrzLovzQnmM=",
    likes :12,
    timestamp: "30mins",
  },
  {
    user: "code_fun",
    postImage : 
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBjb2RlfGVufDB8fDB8fHww",
    likes :12,
    timestamp: "30mins",
  },
])

  return (
    <div className='timeline'>
        <div className="timeline_left">
          <Story stories={stories} />
          <div className='timeline_post'>
           {posts.map(post => (
            <Post 
            key={post.id}
            {...post}
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp} />
           ))
           }

          </div>
        </div>
            <div className="timeline_right">
                <Suggestion />
            </div>
    </div>
  )
}

export default Timeline