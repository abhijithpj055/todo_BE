const express = require('express')
const router =express.Router()

const todolist=[]


router.get('/gettodolist',(req,res)=>{
 res.json(todolist)
})

router.post('/addtodolist',(req,res)=>{
   console.log(req.body);
   todolist.push(req.body.todo)
   console.log(todolist);
   res.json({message:"todolist added"})
})

module.exports=router
