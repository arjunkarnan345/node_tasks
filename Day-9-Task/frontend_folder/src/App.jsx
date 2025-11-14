
//step- 22
import React, { useState } from 'react'
import axios from 'axios'//step-34
const App = () => {
//step-24 //frontenddata send Backend
//create state
const[orddata,setOrderData]= useState({ordplace:"",deliveryplace:""});

//step-25 //data va ehaduthutu vara
const handlechange =(e)=>{

  //step-29 /event use "(e)" 
  const values =e.target.value //values store
   //step-28 spred operator use and concodition "e.target.name" vara value ha "values" la asign panna
    setOrderData({...orddata,[e.target.name]:values})
}

//step -27
const handlesubmit =async(e)=>{
//step-30 /event object use "(e)" and async process
//step-31

e.preventDefault()
//step-32/install "axios"

//step-33 / res na response and api(http://localhost: 3000/api/orderedproduct/insert) activate
const res = await axios.post("http://localhost:3000/api/orderedproduct/insert",orddata)

//step -35
console.log(res);


}



  return (
    //step -23 form create
    <div>
      {/* step-26 /onSubmit */}
       <form onSubmit={handlesubmit}>
   {/*step-24/ use onChange */}
        <input onChange={handlechange} type="text" name='ordplace' placeholder='Enter your Orderedplace ' />
        <input onChange={handlechange} type="text" name='deliveryplace' placeholder='Enter your Deliveryplace ' />
        <input type="submit" value="Submit Location"/>
       </form>
    </div>
  )
}

export default App