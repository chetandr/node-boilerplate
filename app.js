/**
 * This is the entry point of an application
 * @author Ritesh Mohire
 * @purpose To define and start server
 * Date 09/12/2019
 */

"use strict"

/************************* Require modules *************************/
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
// Get config details from .env file
require('dotenv').config()

/************************* Require files *************************/
let requestList = require("./routes/requestListRoute")

/************************* Global variable *************************/
let port = process.env.port || 3001


/********************* Define and call middleware ******************/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/************************* Define routes *************************/

// Define root route
app.get('/', function (req, res) {
    console.log("\n in app.js : root route : ", req.url)
    res.send("Welcome to Node boilerplate!!!")
});

// Define Request List route here
app.use("/requestlist", requestList)

/********************** Start Server ****************************/

app.listen(port, () => console.log(`App listening on port ${port}!`));