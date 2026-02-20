import React, { useEffect, useState } from 'react'
import "./Add.css";
import { assets } from '../../assets/admin_assets/assets';
import axios from 'axios'   
import { toast } from 'react-toastify';


const Add = () => {

  const [image , setImage] = useState(false);
  const [data , setData] = useState({
    name :"",
    description : "",
    price : "",
    category :"Deserts"
  })

  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value ;
    setData(data=>({...data , [name]:value}))
  }

const onSubmitHandler = async(event)=>{

event.preventDefault();
  const url ="https://food-dilvery-app.onrender.com";

const formData = new FormData();
formData.append("name" , data.name);
formData.append("description" , data.description);
formData.append("category" , data.category);
formData.append("price" , Number(data.price));
formData.append("image" , image);

console.log(formData);

const respond = await axios.post(`${url}/api/food/add` , formData)

if(respond.data.success){
  setData({
     name :"",
    description : "",
    price : "",
    category :"Deserts"
  }
  ); 
setImage(false);
toast.success(respond.data.message);
}
else{
  toast.error(respond.data.message)

}
}

  return (
    <div className ="add">
      <form className="flex-col" onSubmit = {onSubmitHandler}>
      <div className="addImgUpload flex-col">
<p>Upload iamge</p>
<label htmlFor ="image">
  <img src={image? URL.createObjectURL(image) :assets.upload_area}></img>
</label>
<input onChange={(e)=>setImage(e.target.files[0])} type ="file" id="image" hidden required ></input>
      </div>

      <div className="addProductName flex-col">
<p>Product Name</p>
<input onChange={onChangeHandler} value={data.name} type="text" name='name'  placeholder ="Type here" required></input>

      </div>

      <div className="addDescription flex-col">
        <p>Product Description</p>
      <textarea onChange={onChangeHandler} value ={data.description}  name="description" rows ="6" placeholder ="Write Content here" required></textarea>
      </div>

      <div className="addCategoryPrice">
        <div className="addCategory flex-col" >
          <p>Product Categry</p>
        <select onChange={onChangeHandler} name = "category">
          <option value="Deserts">Deserts</option>
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Sandwich"> Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure Veg">Pure Veg</option>
          <option value="Pasta">Pasta</option>
          <option value="Noodles">Noodles</option>
        </select>
        </div>

        <div className="add-price flex-col">
          <p>Price</p>
          <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20'></input>
        </div>
      </div>
        <button type="submit">ADD</button>

      </form>

    
    </div>
  )
}

export default Add
