import React,{useState,useEffect,useContext} from 'react'
import {v4 as uuid} from "uuid"
import List from './List';
import { AuthContext } from "../AuthContext";


const TaskModule = () => {
   const {login}=useContext(AuthContext)
     const [todo,setTodo]=useState("");   
    const handleChange = (e)=>{
        setTodo(e.target.value);
       
    }
    // const [productDetails,setProductDeatails]=useState([]);
    const [product, setProduct] = useState([]);
    const handleList=()=>{
           const payload={
               task:todo,
               id:uuid(),
               badge:"planned"
           }
           setProduct([...product,payload]);
           setTodo("");
        
        
     }
     useEffect(()=>{
        login(product);
},[product])
   
    
  
  return (
    <div>
     <input value={todo} placeholder='Enter Task' onChange={handleChange} />
     <button onClick={handleList}>addtask</button> 
     
   
    
    </div>
  )
}

export default TaskModule