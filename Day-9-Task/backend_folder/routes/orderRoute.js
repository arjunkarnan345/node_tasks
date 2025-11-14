import express from 'express' //step - 10
import { createDatas } from '../controllers/ordController.js'; //step-18 

//step - 12 expression create
const ordrutes = express.Router()

//step -14 api set - post method
ordrutes.post("/insert",createDatas) //step -15/createDatas function create ./controllers/ordController.js


export default ordrutes;//step-11


//http://localhost:3000/api/orderedproduct/insert