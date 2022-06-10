// ===IMPORT=== 
const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')


const mongoConfig = require('./config/mongoConfig')
const contactsRouter = require('./routes/contactsRouter')
const usersRouter = require('./Routes/usersRouter')

//===IMPORT ROUTER===
const app = express()
const PORT = 9000

//===MIDDLEWARE===
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())

//===TELL APP USE THIS ROUTER after / SEND MSG BELOW===
app.use('/Contacts', contactsRouter)
app.use('/users', usersRouter)


//===ROOT ROUTE for the APP===
app.get('/', (req, res) => {
    res.status(201).json("Welcome to my API Contacts!")
})






app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
    
})
