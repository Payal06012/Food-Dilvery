import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const [err , setErr] = useState("");
  const [showalert , setShowalert] = useState(false);

  const {
    cartItems,
    food_list,
    totalCartAmount,
    url,
    token,
    setCartItems
  } = useContext(StoreContext);

  // 1️ Address state
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: ""
  });

  // 2️ Input change handler
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // 3️ Place Order (COD)
  const placeOrder = async (e) => {
    e.preventDefault();

    // Convert cartItems → order items
    const orderItems = [];

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const food = food_list.find(item => item._id === itemId);

        orderItems.push({
          foodId: food._id,
          name: food.name,
          quantity: cartItems[itemId],
          price: food.price
        });
      }
    }

    if (orderItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const orderData = {
      items: orderItems,
      address: address,
      amount: totalCartAmount() === 0 ? 0 : totalCartAmount() + 2,
      paymentMethod: "COD"
    };

    try {
      const response = await axios.post(
        url + "/api/order/place",
        orderData,
        {
          headers: { token }
        }
      );

      if (response.data.success) {
        alert("Order placed successfully! (Cash on Delivery)");
        setCartItems({});
      } else {
        alert("Order failed");
      }

    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      // setShowalert(true);
      // setAlert(error.response.data.message);
   
    }

    setAddress({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: ""
    });
  };

  return (

    <>

     {/* {setShowalert === true ?
      <p>{alert}</p> 
      : <></>
     } */}




    
    <form className="place-order" onSubmit={placeOrder}>

    {/* LEFT SIDE */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-feilds">
          <input name="firstName" value={address.firstName} onChange={handleChange} placeholder="First Name" required />
          <input name="lastName" value={address.lastName} onChange={handleChange} placeholder="Last Name" required/>
        </div>

        <input name="street" value={address.street} onChange={handleChange} placeholder="Street" required />

        <div className="multi-feilds">
          <input name="city" value={address.city} onChange={handleChange} placeholder="City" required />
          <input name="state" value={address.state} onChange={handleChange} placeholder="State" required />
        </div>

        <div className="multi-feilds">
          <input name="zip" value={address.zip} onChange={handleChange} placeholder="Zip Code" required />
          <input name="country" value={address.country} onChange={handleChange} placeholder="Country" required />
        </div>

        <input name="phone" value={address.phone} onChange={handleChange} placeholder="Mobile Number" required />
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
          <button type="submit">
            PLACE ORDER (CASH ON DELIVERY)
          </button>

        </div>
      </div>

      


    </form>
    </>
  );
};

export default PlaceOrder;


// import React, { useContext } from 'react'
// import './PlaceOrder.css';
// import { StoreContext } from '../../context/StoreContext';

// const PlaceOrder = () => {

// const {totalCartAmount} = useContext(StoreContext);

//   return (
//    <form action="" className="place-order">
//  <div className="place-order-left">
// <p className="title">Delivery information</p>

// <div className="multi-feilds">
//   <input type="text" placeholder ='First Name'/><input type="text" placeholder ="Last Name"/>
// </div>

// <input type="email" placeholder ='E mail '/><input type="text" placeholder ='Street' />



//   <div className="multi-feilds">
//   <input type="text" placeholder ='City'/><input type="text" placeholder ="state"/>
// </div>

// <div className="multi-feilds">
//   <input type="text" placeholder ='Zip Code'/><input type="text" placeholder ="Country"/>
// </div>

// <input type='number' placeholder ='Mobile NO'></input>

// </div>


//  <div className="place-order-right">
//    <div className="cart-total">
//         <h2>Cart Total</h2>
//      <div>
//       <div className="cart-total-details">
//         <p>Subtotal</p>
//         <p>$ {totalCartAmount()}</p>
//       </div>
//       <div className="cart-total-details">
//         <p>DeliveryFee</p>
//         <p>$ {(totalCartAmount() === 0 ) ? 0 : 2}</p>
//       </div>
//       <hr></hr>
//       <div className="cart-total-details">
//         <b>Total</b>
//         <b> $ {(totalCartAmount() === 0 ) ? 0 :  totalCartAmount() + 2 } </b>
//       </div>
//     </div>


//           <button>PROCEED TO PAYMENT</button>
//           </div>
//  </div>


    
//    </form>
//   )
// }

// export default PlaceOrder
