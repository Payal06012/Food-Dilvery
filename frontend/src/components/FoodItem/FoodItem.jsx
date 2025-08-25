import React, { useContext } from 'react'

import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id , name , price , description , image}) => {

    // const [itemCount , setItemCount] = useState(0);
    const {cartItems , setCartItems , addToCart , removeFromCart , url} = useContext(StoreContext); //url

  return (
    <div className ='food-item'>
        <div className="food_item_image_container">

            <img src={url + "/images/" +image} alt="" className="food-item-img" />
            {/* <img src={image} alt="" className="food-item-img" /> */}
            
            

            {
                !cartItems[id]
                ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className="add" />
                : <div className="food-item-counter">
                    <img onClick ={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                    <p>{cartItems[id]}</p>
                    <img onClick ={()=>addToCart(id)} src={assets.add_icon_green} />
                </div>
            }
   
        </div>
           
           <div className="food-info">

        <div className="food-item-name-rating">
            <p>{name}</p>
       <img src={assets.rating_starts} alt=""/>
        </div>

        <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
      
    </div>
    </div>
  )
}

export default FoodItem ;
