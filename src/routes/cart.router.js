import { Router } from "express";
import fs from 'fs'
const path= 'cart.json'

const router= Router()

router.get('/',(req,res)=>{
    res.render('cart')
})
export default router