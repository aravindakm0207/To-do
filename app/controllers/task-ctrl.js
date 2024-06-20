const Task=require('../models/task-model')
const { validationResult } = require('express-validator')
const tasksCltr = {}

tasksCltr.create = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    try{
    const body = req.body 
    const task = new Task(body) 
    task.user = req.user.id 
    await task.save()
    res.status(201).json(Task)
}
catch(err) {
    console.log(err) 
    res.status(500).json({ error: 'something went wrong'})
}

}


tasksCltr.show = async (req, res) => {
    try { 
        const task = await Task.find() 
        res.json(task)
    } catch(err) {  
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
}


tasksCltrCltr.single = async (req, res) => {
    try{
        const id = req.params.id
        const task = await Task.findById(id)// finding a single post based on id
        res.status(200).json(task)
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: 'something went wrong'})
    }
}

 
tasksCltr.update = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const id = req.params.id
        const body = req.body
        const task = await Task.findOneAndUpdate({user: req.user.id, _id:id} ,body,{new: true})
        if(!task){
            return res.status(404).json({})
        }
        res.status(200).json(post)
    }catch(err) {
        console.log(err)
        res.status(500).json({ error: 'something went wrong'})
    }
}


tasksCltr.remove = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const id = req.params.id
        const task = await Task.findOneAndDelete({user: req.user.id, _id:id})
        if(!task){
            return res.status(404).json({})
        }
        res.status(200).json(task)
    }catch(err) {
        console.log(err)
        res.status(500).json({ error: 'something went wrong'})
    }
}