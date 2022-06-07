//===CONFIG CONNECT TO MONGOOSE===

const mongoose = require('mongoose')


//===EXPORT W/ASYNC FUNCTION & CATCH FOR ERRORS===
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI) //makes the request
        await mongoose.connection                       //makes sure we have the connection
        console.log('MongoDB Connected!');
    } catch (error) {
        console.error(error)
    }
}
