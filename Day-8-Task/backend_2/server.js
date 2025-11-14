import express from 'express'
import dotenv from 'dotenv'
import dataRoute from './routes/dataRoute.js'
import cors from 'cors'
import connectDb from './config/db.js'




dotenv.config()
connectDb()

const app = express();

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use("/api/datadetails",dataRoute)


app.listen(PORT,()=>{
    console.log(`server is connected sucessfully done http://localhost:${PORT}`);
    
})

//http://localhost:3000/api/datadetails/