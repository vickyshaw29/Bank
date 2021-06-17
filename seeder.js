const express=require('express')
const mongoose=require('mongoose')
const Banks=require('./models/bank')
const bank=require('./data/bankData')

require('dotenv').config()
const app=express()
const importData=async()=>{
   try {
    await Banks.deleteMany()
//    const createdBanks= await Banks.insertMany(bank)
//    const adminUser=createdUsers[0]._id
   const sampleBanks=bank.map(product=>{
       return {...product}
   })
   await Banks.insertMany(sampleBanks)
   console.log('data imported')
   process.exit()
   } catch (error) {
       console.log(error)
   }
}
const destroyData=async()=>{
    try {
     await Banks.deleteMany()
    //  await Product.deleteMany()
    //  await User.deleteMany()
    console.log('data destroyed')
    process.exit()
    } catch (error) {
        console.log(error)
    }
 }
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(process.env.PORT),()=>console.log('running on port 8000'))
.catch(err=>console.log(err))
if(process.argv[2]==='-d'){
    destroyData()
}
importData()