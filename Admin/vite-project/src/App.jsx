import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import {Routes , Route} from 'react-router-dom';
import Order from './Pages/Order/Order';
import Add from './Pages/Add/Add';
import List from './Pages/List/List';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr/>


      <div className="app-content">
        <SideBar/>

<Routes>
<Route  path ="/" element ={<Add/>} /> 
<Route  path ="/list" element ={<List/>} /> 
<Route  path ="/order" element ={<Order/>} /> 

</Routes>

      </div>

   
      
    </div>
  )
}

export default App
