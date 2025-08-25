import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload/AppDownload';

const home = () => {
   const [category , setCategory] = useState("All");

  const a = 14 ;
  
  return (
    <div>
      <Header/>
      <ExploreMenu  category ={category} setCategory={setCategory}/>
       <FoodDisplay category ={category}/>
       <AppDownload/>
    </div>
  )
}

export default home
