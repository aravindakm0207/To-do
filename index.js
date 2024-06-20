require('dotenv').config()
const express=require('express')
const cors= require('cors')
const {checkSchema}=require('express-validator')
const configureDB=require('./config/db')
const app=express()
const port=3333


app.use(cors())
app.use(express.json())
configureDB()
app.listen(port,()=>{
    console.log('server running on port',port)
})