import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import "./navBar.css";

const NavBar = () => {
  return (
    <div className ="Nav-Bar">
<img src={assets.logo } alt="" className="logo" />
<img src={assets.profile_image} alt="" className="profile" />
      
    </div>
  )
}


export default NavBar
