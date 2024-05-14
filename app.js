const express = require('express')
const mongoose = require('mongoose')


const app =  express()

mongoose.connect('mongodb://localhost:27017/AlienDBex')
const con = mongoose.connection


con.on('open', ()=>{
    console.log("connected")
})


app.use(express.json())


const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, ()=>{
    console.log('server started')
})