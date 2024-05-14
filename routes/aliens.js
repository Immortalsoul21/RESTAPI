const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',async(req,res)=>{
    try{
        const aliens = await Alien.find() //waiting for find to comeback
        res.json(aliens)
    }catch(err){
      res.status(500).json({message: err.message})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const aliens = await Alien.findById(req.params.id) //waiting for find to comeback
        res.json(aliens)
    }catch(err){
      res.status(500).json({message: err.message})
    }
})

router.post('/',async(req,res)=>{
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech
    })
    try{
       const a1 = await alien.save() 
       res.json(a1)

    }catch(err){
        res.status(400).json({message: err.message}) 
    }
})

router.patch('/:id',async(req,res)=>{
   try{
    const alien = await Alien.findById(req.params.id)
    
    alien.name = req.body.name 
    const a2 = await alien.save()
    
    res.json(a2)

   }catch(err){
      res.status(500).json({message: err.message})
   }
})

router.delete("/:id",async(req,res)=>{
    try{
    const alien =  await Alien.findById(req.params.id)
    await alien.deleteOne()
    res.json({message: "delete successful"})
    }catch(err){
        res.json({message: err.message })
    }
})

module.exports = router