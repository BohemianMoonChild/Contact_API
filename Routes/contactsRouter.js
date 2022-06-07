//===IMPORT EXPRESS===
const express = require('express')

//===IMPORT SCHEMA===
const ContactsModel = require('../Models/contactsSchema')

//===CREATE ROUTER===
const router = express.Router()

//===CREATE FIRST ROUTE - GET CONTACTS
router.get('/', async (req, res) => {
    try {
        const contacts = await ContactsModel.find()
        res.status(200).json(contacts)
        
    } catch (error) {
        console.log(error)  
    }
})


//===CREATE CONTACTS===
router.post('/', async (req, res) => {
    const contactsData = req.body           //Grabs Data from Request

    try {
        const contacts = await ContactsModel.create(contactsData) //Creates New Contact in the Database
        
        //===SENDS BACK A RESPONSE===

        res.status(201).json(contacts)
        // res.status(201).json({data:todo}) //another method to send
    } catch (error) {
        console.error(error)
        res.status(400).json('Warning; Bad request!!!')
        
    }

})


//===GET CONTACT BY ID===
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const contacts = await ContactsModel.findById(id)
        res.status(200).json(contacts)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: 'Cannot locate Id'
        })
    }
})



module.exports = router