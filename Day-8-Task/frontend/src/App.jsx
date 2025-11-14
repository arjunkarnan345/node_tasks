import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [studentdata,setStudentData] = useState({studentname:"",address:""})
  
  const datahandle = (e)=>{

    const values = e.target.value


    setStudentData({...studentdata,[e.target.name]:values})

  }
  
  const handleSubmit =async(e)=>{
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:3000/api/datadetails/dataslink",studentdata)

    //const datas = await res.json()

    console.log(res.data);
    
   
    } catch (error) {
       console.log('not show data',error);
      
    }
    
  }
  
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input onChange={datahandle} type="text" name='studentname' placeholder='Enter your name ' />
        <input  onChange={datahandle} type="text" name='address' placeholder='Enter your adderess ' />
        <input type="submit" value="Submit" />

        </form>
    </div>
  )
}

export default App


//http://localhost:3000/api/datadetails/dataslink