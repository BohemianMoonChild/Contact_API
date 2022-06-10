//===BRING IN EXPRESS===
const express = require('express')
const UserModel = require('../Models/usersSchema')

//===PULLS OUT THE TWO FUNCTIONS NEED FROM EXPRESS VALIDATOR===
const {check, validationResult} = require('express-validator')

//===HASHING ALGORITHM TO SECURE PW===
const bcrypt = require('bcrypt')

//===CREATE A ROUTER===
const router = express.Router()


//===CREATE POST REQUEST - REGISTER NEW USER===
router.post('/', [
    check('username', "Username is required from Middleware!!!").notEmpty(), 
    check("email", "Please use a valid email from Middleware!!!").isEmail(),
    check("password", "Please enter a password").notEmpty(),
    check("password", "Please enter a password with six or more characters").isLength({min: 6}),
    check("password", "Password must include min one symbol").isStrongPassword({minSymbols:1})
    ] ,async (req, res) => {
    const userData = req.body

    if(!errors.isEmpty()) {
        return res.json(errors.array())
    }

    try {
        
        const SALT = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(userData.password, SALT)
        console.log(hashedPassword)
        userData.password = hashedPassword

        const user = await UserModel.create(userData) //===Creating User
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad Request!!!!!')
        
    }
})




module.exports = router 