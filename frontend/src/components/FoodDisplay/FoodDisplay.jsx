import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
// import { food_list } from '../../assets/frontend_assets/assets'
 
const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
    
  return (
    <div className="foodDisplay" id="foodDisplay">
      <h2>Top Dishes near you</h2>
      <div className="food_dispaly_list">

        {food_list.map((item , index)=>{

           if(category === "All" || category === item.category ){

            return <FoodItem key={index} id={item._id} name= {item.name} price ={item.price} description ={item.description} image={item.image}/>
           }
          })}
      </div>
    </div>
  )
}

export default FoodDisplay ;
