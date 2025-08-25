import React from 'react'
import "./SideBar.css";
import { assets } from '../../assets/admin_assets/assets';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    
    <div className ="sideBar">

        <div className="sideBarOptions">
            <NavLink to ="/add" className="sideBarOption">
                <img src={assets.add_icon} alt="" />
                <p>Add Item</p>
            </NavLink>

              <NavLink to="/list"  className="sideBarOption">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>

              <NavLink to ="/order" className="sideBarOption">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>

        </div>

     
      
    </div>
  )
}

export default SideBar
