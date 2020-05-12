const express = require('express')
const app = express()
const User = require('./models/user')

app.use(express.urlencoded({extended: false}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/intromongoose')

const db = mongoose.connection

db.once('open',()=>{
    console.log(`Connected to MongoDB at ${db.host} : ${db.port}`)
})

db.on('error' ,(err)=> {
    console.log(`db error: \n${err}`)
})


/* let newUser = User({
    name: 'Sam',
    email: 'abc@yahoo.com'
})

User.create(newUser, (err,user)=>{
    if(err) return console.log(err)
    console.log(user.sayHello())
}) */

User.create({
    name: 'Guy',
    email: 'guy@j.com'
},(err,user)=>{
    if(err) return console.log(err)
    console.log(user.sayHello())
} 
)