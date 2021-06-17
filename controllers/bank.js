const Banks=require('../models/bank')
exports.home=(req,res)=>{
    return res.status(200).json({msg:'Welcome to the bank restApi'})
}
exports.getBanks=async(req,res)=>{
    try {
        const { q,limit } = req.query
        if (!q) {
            var bankArray = await Banks.find()
        } else {
                bankArray = await Banks.find({
                branch: { $regex: `${q}`, $options: "i" },
            }).limit(limit*1) //getting all the banks from the database
        }
        res.json(bankArray) //serving the banks
    } catch (error) {
        console.log(error)
    }
}