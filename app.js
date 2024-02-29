const express= require('express')
const app = express()
const path = require('path')
app.use(express.json())
const todoRouter = require('./todoRouter')


app.use('/',todoRouter)


app.listen(5004,(err)=>{
    err?console.log(err):console.log('server is running at 5004');
})
