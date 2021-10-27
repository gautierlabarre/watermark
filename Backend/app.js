const express = require("express");
const path = require("path");
const cors = require("cors");
const config = require("./config/config");
const routes = require("./routes/routes");
const app = express();
const bodyParser = require("body-parser");

app.use(cors()); //enable cors

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use("/", routes);

app.listen(config.APP_PORT); // Listen on port defined in environment

console.log("======================= APP LOADED ================================");
module.exports = app;
