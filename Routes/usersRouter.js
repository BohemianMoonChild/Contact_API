//===BRING IN EXPRESS===
const express = require('express')
const UserModel = require('../Models/usersSchema')

//===CREATE A ROUTER===
const router = express.Router()


//===CREATE POST REQUEST - NEW USER===
router.post('/', async (req, res) => {
    const userData = req.body

    try {
        const user = await UserModel.create(userData) //===Creating User
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad Request!!!!!')
        
    }
})




module.exports = router 