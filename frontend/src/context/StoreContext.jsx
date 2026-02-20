
import { createContext, useEffect ,useState} from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const [cartItems , setCartItems] = useState({});

    // for login and registeration
    const url= "https://food-dilvery-app.onrender.com";
    const [token , setToken] = useState("");

    const [food_list , setFoodList] = useState([]);

    const addToCart =async(itemId)=>{

        if (!token) return;

    await axios.post(
      url + "/api/cart/add",
      { itemId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev , [itemId] :1}));
        }
        else{
            setCartItems((prev)=>({...prev , [itemId] : prev[itemId] +1}));
        }

    }

    const removeFromCart = async(itemId)=>{

            await axios.post(
      url + "/api/cart/remove",
      { itemId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

         setCartItems((prev)=>({...prev , [itemId] : prev[itemId] -1}));
    }

      const fetchCart = async () => {
    const response = await axios.get(
      url + "/api/cart/get",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCartItems(response.data.cartData);
  };

    // useEffect(()=>{
    // console.log(cartItems);
    // },[cartItems])

    let totalCartAmount=()=>{
        let totalAmount = 0;
       

        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=>product._id === item);

             totalAmount = itemInfo.price * cartItems[item] + totalAmount;
        
            }
        }
        return totalAmount ;  

    }

     console.log (totalCartAmount());

     const fetchFoodList = async ()=>{
        const response = await axios.get(url +"/api/food/list");
        setFoodList(response.data.data);
     }

     useEffect(()=>{
     
        async function loadData (){
            await fetchFoodList();
               if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
        }

     loadData();

   
     },[])

 
    const contextValue ={
   food_list,
   cartItems,
   setCartItems,
   addToCart,
   removeFromCart ,
   totalCartAmount ,
   url ,
   token,
   setToken
    }

return(
    <StoreContext.Provider value ={contextValue}>
    {props.children}
    </StoreContext.Provider>

)
}

export default StoreContextProvider ;
