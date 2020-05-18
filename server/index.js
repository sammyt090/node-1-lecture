const express = require('express')
// import express from "express" same thing but node does not support this
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/andrew', (req, res) => {
    console.log("I got a request from /api/andrew")
    res.status(200).send('Andrew')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)

app.listen(SERVER_PORT, () => 
console.log(`Server running on port ${SERVER_PORT}`))

