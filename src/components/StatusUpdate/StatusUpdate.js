import React, { useState } from "react";
import profile from '../../app/assets/profile.png'

const StatusUpdate =()=>{
    const [update,setUpdate] = useState("")
    return (
        <div 
         className="post">
            <img 
                src={profile} 
                alt="logo" 
                id="postlogo" 
            />
            <input 
                type="text" 
                name="post" 
                id="postupdate" 
                placeholder="What's on your mind, User?" 
                value={update}
                onChange={e=>setUpdate(e.target.value)}
            />
        </div>
    )
}
export default StatusUpdate;