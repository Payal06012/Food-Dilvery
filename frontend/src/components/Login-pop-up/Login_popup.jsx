import React, {  useState , useContext} from 'react'
import './Login_pop_up.css'
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios" ;


const Login = ({setShowLogin}) => {

  const {url ,  setToken} = useContext(StoreContext);


  const [current_state , setCurrent_state] = useState("Sign up");

const [data , setData] = useState({
  name : "",
  email : "",
  password : ""
})


//onHandler function takes the input from from the input field and change the STSTE Variable
const onChangeHandler = (event)=>{
const name = event.target.name ;
const value = event.target.value ;
setData(data=> ({...data , [name]:value}))
}

const onLogin = async(event)=>{
event.preventDefault();

let newUrl = url ;

if(current_state === "Log in"){
  newUrl += "/api/user/login"
}
else{
  newUrl +="/api/user/register"
}

const response = await axios.post(newUrl , data);

if(response.data.success){
 setToken( response.data.token);
 localStorage.setItem("token" , response.data.token);
 setShowLogin(false);
}
else{
  alert(response.data.message);
}

}

  return (
    <div className="Login_Popuo">
      <form onSubmit={onLogin} action="" className="login-pop-up-container">
    
       <div className="login-pop-up-title">
     
        <h2>   {current_state}</h2>
        <img  onClick={()=> setShowLogin(false)} src={assets.cross_icon}></img>
       </div>

<div className="login-pop-up-input">
  {current_state === "Log in" ? <></> :   <input type="text" name='name'  onChange={onChangeHandler} value = {data.name} placeholder='Your Name' required  />}
  
  <input name = 'email' onChange={onChangeHandler} value = {data.email} type="email" placeholder='Your E mail'  required/>
   <input  name = 'password' onChange={onChangeHandler} value = {data.password} type="password" placeholder='Set Password'  required/>

</div>
<button type='submit'>{current_state === "Sign up" ? "Create Account" : "Log in" }</button>

<div className="login-pop-up-condition">
  <input type="checkbox"  required />
  <p>By continuing , I agree to the terms of use and privacy policy</p>

</div>


{current_state === "Log in" ?
<p>Create a new Account? <span onClick ={()=>setCurrent_state("Sign up")}>Click here</span></p> :
<p>Already have an Account ? <span onClick ={()=>setCurrent_state("Log in")}>Click here</span></p>
}

      </form>
      
    </div>
  )
}

export default Login ;

