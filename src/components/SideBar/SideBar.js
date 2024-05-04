import profile from '../../app/assets/profile.png'
import friends from '../../app/assets/friends.png'
import video from '../../app/assets/video.png'
import market from '../../app/assets/market.png'
import feed from '../../app/assets/feed32.png'
import event from '../../app/assets/event.png'
import ads from '../../app/assets/ads.png'
import fund from '../../app/assets/funding.png'
import seemore from '../../app/assets/more.png'
import saved from '../../app/assets/saved.png'
import memories from '../../app/assets/frame.png'
import group from '../../app/assets/group.png'
import React from "react"

const SideBar=()=>{
    const items= [["User",profile],
                    ["Friends",friends],["Memories",memories],
                    ["Saved",saved],["Groups",group],
                    ["Videos",video],["Marketplace",market],
                    ["Feeds",feed],["Events",event],
                    ["Ads Manager",ads],["Fundraiser",fund],
                    ["See more",seemore]]

    return(
        <div className="sidebar">
            {items.map((item, index) => (
              <button className="sidebarbtn" 
                key={index}
              >
                <img src={item[1]} 
                  alt={item[1]}
                  id={`logo${index}`}
                />
                <span id={`span${index}`}>{item[0]}</span>
              </button>
            ))}
        </div>
    )
}
export default SideBar;