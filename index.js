const express = require("express");

const bodyParser = require("body-parser");

const mongo = require("./db/connectionMongo");

const app = express();

var cors = require('express-cors')
app.use(cors({
   allowedOrigins: [
       'http://localhost:3001',
   ]
}))

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const routeUsers = require("./routes/users")(app);

mongo.conectar(app); 