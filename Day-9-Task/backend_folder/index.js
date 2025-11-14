import express from 'express' //step -1
import dotenv from 'dotenv' //step -3
import orderRoute from './routes/orderRoute.js'; //step-13
import cors from 'cors' //step -20
import connectDb from './config/db.js';


dotenv.config()   //step-4

//step-45
connectDb();

//step-5 expression create 
   const myapp = express()

//step - 19 //frontend la data http la varum atha node block pannum
             //antha block ha ehadukanu na "myapp" la "use" inra buildin ha use panni 
             //athula"cors" ha call pannanum 
  myapp.use(cors())

//step-21
  myapp.use(express.json())

//step- 8 Route set
myapp.use("/api/orderedproduct",orderRoute) //step-9 route create ./routes/orderRoute


//step-6
   const PORT = process.env.PORT || 5000

//step-7
    myapp.listen(PORT,()=>{
        console.log(`Server Connected Succesffuly Done http://localhost:${PORT}`);
        

    })

//http://localhost:3000/api/orderedproduct