import React, { useState } from 'react'
import logo from '../../app/assets/logo.svg'
import home from '../../app/assets/home.svg'
import friends from '../../app/assets/friends.png'
import video from '../../app/assets/video.png'
import market from '../../app/assets/market.png'
import games from '../../app/assets/games.png'
import {useNavigate} from 'react-router-dom'
import { FaFacebookMessenger } from 'react-icons/fa';
import {CgMenuGridO,CgProfile} from 'react-icons/cg'
import {IoMdNotifications} from 'react-icons/io'

const Header=()=>{
  const navigate = useNavigate()

  const middleitems = [home,friends,video,market,games]
  const lastitems=[<CgMenuGridO/>,<FaFacebookMessenger/>,<IoMdNotifications/>]

  const [search,setSearch] = useState("")
  const [profileActive, setProfileActive] = useState(false);

  const menuToggle =()=>{
    setProfileActive(!profileActive);
  }

  const performLogout=()=>{
    navigate('/login')
  }

  return (
    <nav className="header">
      <div className='firsticon'>
        <img 
            src={logo} 
            alt='logo'
            id='logo'
         />
        <input 
            type='text' 
            name="search" 
            id="search" 
            placeholder='Search Facebook'
            value={search}
            onChange={e=> setSearch(e.target.value)}
         />
         </div>
        <div className='middleicon'>
        {middleitems.map((item,index)=>(
            <img 
                className="icon" 
                src={item}
                key={index}
                alt={`'${item}'`}
                id={`middleicon${index}`}
            />
        ))}
        </div>
        <div className='lasticon'>
          {lastitems.length?lastitems.map((item,index)=>(
              <button type="button"
                id={`lasticon${index}`} 
                key={index} 
              >
                {item}
              </button>
          )):(
            <div id='loading'>Loading items...</div>
          )}
        <div id='menu'>
          <button
            className="menubtn"
            onClick={menuToggle}
          >
            {<CgProfile/>}
          </button>
        </div>
        </div>
        {profileActive &&
        <div className='profile'>
          <button id='logoutbtn' 
            type="button"
            onClick={performLogout}
          >
            Logout
          </button>
        </div>
        }
    </nav>
  )
}
export default Header;