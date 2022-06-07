//===CREATE BLUEPRINT===
const mongoose = require('mongoose')
//===Create Schema===

const contactsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true 
    },

    contactType: {
        type: String,
        required: true, 
        default: 'personal'

    },

    created_at: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('Contacts_API', contactsSchema)