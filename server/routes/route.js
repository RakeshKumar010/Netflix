const express = require('express')
const route = express.Router()
const userModel = require('../models/userModel')

route.post('/signup',async(req,res)=>{
    let result = new userModel(req.body)
    result = await result.save()
    res.send(result)


})
route.post('/login',async(req,res)=>{
    let result = await userModel.findOne(req.body)
    res.send(result)
})
module.exports = route;

