import React,{useContext} from 'react'
import { AuthContext } from '../AuthContext'
import '../App.css';
const List = () => {
const {list}=useContext(AuthContext)
console.log(list)
  return (
    <div className='ListMainDiv'>
    {
        list.map((get,index)=>( 
            <div key={index} > 
            <h5 className='listc' >{get.task}</h5>
           
            
          </div>    
        ))
    }
    </div>
  )
}

export default List