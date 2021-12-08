// server.js
// Import dependencies
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
// Import PORT and mongoUri env variables
const { PORT, mongoUri } = require("./config")

// Initialise server and use packages
const app = express()
app.use(cors())
app.use(morgan("tiny"))
app.use(bodyParser.json())

// Connect to mongoDB
mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err))

// Run server on specified port
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`))