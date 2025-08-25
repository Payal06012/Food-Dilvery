import React from 'react'
import './AppDownload.css'
import { assets } from '../../../assets/frontend_assets/assets'


const AppDownload = () => {
  return (
    <div className ="App-download" id="App-download">
      <p>For better experience download<br/>Tomato App</p>
      <div className="App-download-platform">
        <img src={assets.play_store} alt=""/>
            <img src={assets.app_store} alt=""/>
      
      </div>
      
    </div>
  )
}

export default AppDownload
