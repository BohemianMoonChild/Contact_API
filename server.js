// ===IMPORT EXPRESS=== 
const express = require('express')

//===INITIALIZE .ENV CONNECT TO MONGODB
require('dotenv').config()

const mongoConfig = require('./config/mongoConfig')
const contactsRouter = require('./routes/contactsRouter')
const usersRouter = require('./Routes/usersRouter')

//===IMPORT ROUTER===
const app = express()
const PORT = 9000

//===MIDDLEWARE===
app.use(express.json())

//===TELL APP USE THIS ROUTER after / SEND MSG BELOW===
app.use('/Contacts', contactsRouter)
app.use('/users', usersRouter)


//===ROOT ROUTE for the APP===
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API Contacts!")
})






app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
    
})
