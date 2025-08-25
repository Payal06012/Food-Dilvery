import React, { useEffect, useState } from 'react'
import axios from 'axios'   
import { toast } from 'react-toastify';
import './List.css'

const List = () => {
const na ="payal";
  const [ list , setList] = useState([]);
      const url = "http://localhost:4000";

  const fetchList = async ()=>{

    const response = await axios.get(`${url}/api/food/list`);

    // console.log(response.data);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error");s
    }
  }

const removeItem = async(foodId)=>{
  // console.log(foodId)
 const response = await axios.post(`${url}/api/food/remove` , {_id:foodId});
 console.log(response);
 await fetchList();
 
 if(response.data.success){
  
  toast.success(response.data.message);

 }
 else{
  toast.error("Error");
}

}


useEffect(()=>{
fetchList();

} , []);

  return (
    <div className=" list add flex-col">
      <p>All Food List</p>
      <div className="listtable">
        <div className="listTableFormat title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item , index)=>{
          return(
        <div key={index}  className="listTableFormat">
       
         <img src={`${url}/images/`+item.image}></img>
     
       <p>{item.name}</p>
       <p>{item.category}</p>
       <p>{item.price}</p>
       <p onClick={()=>removeItem(item._id)}  className='cursor'>x</p>
        </div>

          )
        })}
      </div>

      
    </div>
  )
}

export default List ;
