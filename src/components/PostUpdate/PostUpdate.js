import React from "react";
import profile from '../../app/assets/profile.png'
import dots from '../../app/assets/three.png'
import x from '../../app/assets/x1.png'
import pic from '../../app/assets/tom-sad.gif'

const PostUpdate=()=>{
    return(
        <div className="updates">
        <div 
            className="post1">
                <img 
                    id="postimg" 
                    src={profile} 
                    alt="profile" 
                />
        </div>
        <div 
            id="label">
            <div id="labelname">Friend 1</div>
        <div>
            <img 
                id="dot" 
                src={dots} 
                alt="" 
            />
            <img 
                id="x" 
                src={x} 
                alt="" 
            />
            </div>
        </div>
        <div id="img">
            <img 
                id="img1" 
                src={pic} 
                alt="" 
            />
        </div> 
    </div>
    )
}
export default PostUpdate