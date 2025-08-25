import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

const {totalCartAmount} = useContext(StoreContext);

  return (
   <form action="" className="place-order">
 <div className="place-order-left">
<p className="title">Delivery information</p>

<div className="multi-feilds">
  <input type="text" placeholder ='First Name'/><input type="text" placeholder ="Last Name"/>
</div>

<input type="email" placeholder ='E mail '/><input type="text" placeholder ='Street' />



  <div className="multi-feilds">
  <input type="text" placeholder ='City'/><input type="text" placeholder ="state"/>
</div>

<div className="multi-feilds">
  <input type="text" placeholder ='Zip Code'/><input type="text" placeholder ="Country"/>
</div>

<input type='number' placeholder ='Mobile NO'></input>

</div>


 <div className="place-order-right">
   <div className="cart-total">
        <h2>Cart Total</h2>
     <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>$ {totalCartAmount()}</p>
      </div>
      <div className="cart-total-details">
        <p>DeliveryFee</p>
        <p>$ {(totalCartAmount() === 0 ) ? 0 : 2}</p>
      </div>
      <hr></hr>
      <div className="cart-total-details">
        <b>Total</b>
        <b> $ {(totalCartAmount() === 0 ) ? 0 :  totalCartAmount() + 2 } </b>
      </div>
    </div>


          <button>PROCEED TO PAYMENT</button>
          </div>
 </div>


    
   </form>
  )
}

export default PlaceOrder
