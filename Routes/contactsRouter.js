//===IMPORT EXPRESS===
const express = require('express')

//===IMPORT SCHEMA===
const ContactsModel = require('../Models/contactsSchema')

//===CREATE ROUTER===
const router = express.Router()

//===CREATE FIRST ROUTE - GET CONTACTS
router.get('/', async (req, res) => {
    try {
        const contacts = await contactsModel.find()
        res.status(200).json(contacts)
        
    } catch (error) {
        console.log(error)  
    }
})


module.exports = router