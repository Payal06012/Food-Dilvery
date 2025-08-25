import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Login from './components/Login-pop-up/Login_popup'


const App = () => {

  const [showLogin , setShowLogin] = useState(false);

  return (
    <>

{showLogin ? <Login setShowLogin ={setShowLogin}/>: <></>}

    <div className = 'app'>
      <Navbar setShowLogin={setShowLogin}/>
  <Routes>
    <Route path ='/' element ={<Home/>} />
    <Route path = '/Cart' element ={<Cart/>} />
     <Route path = '/order' element ={<PlaceOrder/>} />
  </Routes>
    
    </div>
      <Footer/>
      </>
  )
}

export default App
