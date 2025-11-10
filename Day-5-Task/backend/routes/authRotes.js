import express from 'express'
import { authController } from '../contollers/authController.js';


const router =express.Router()
router.post("/datas",authController)



console.log(router);

export default router;