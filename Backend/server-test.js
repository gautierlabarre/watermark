/**
 * File used for Jest tests
 * I could put in in the test folder, it would probably be cleaner
 */
const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./routes/routes");
const app = express();

const bodyParser = require("body-parser");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors()); //enable cors

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

console.log("======================= APP LOADED ================================");
module.exports = app;
