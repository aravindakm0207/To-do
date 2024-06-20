const mongoose=require('mongoose')
const configureDB=async()=>{
    try{
        const db=mongoose.connect(process.env.DB_URL)
        console.log('connected to database succesfully')
    }
    catch(err){
        console.log(err)
    }
}
module.exports=configureDB