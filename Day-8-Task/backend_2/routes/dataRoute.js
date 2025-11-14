import express from 'express'
import {createDatas} from '../controller/dataCreate.js'

const routes = express.Router()

routes.post("/dataslink",createDatas)



export default routes;

//http://localhost:3000/api/datadetails/dataslink