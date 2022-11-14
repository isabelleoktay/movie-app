const express = require("express");
const searchRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");


module.exports = searchRoutes;