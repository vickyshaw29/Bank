const express=require('express')
const router=express.Router()
const {getBanks,home}=require('../controllers/bank')

router.get('/',home)
router.get('/banks',getBanks)




module.exports=router