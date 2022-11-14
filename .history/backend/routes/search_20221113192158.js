const express = require("express");
const { Collection } = require("mongodb");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const searchRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

searchRoutes.route("/search").get( async (req, res) => {
    let db_connect = dbo.getDb();
    try {
        movies = db_connect.collection("movies");
        let result = await movies.aggregate([
            {
                "$search": {
                    "autocomplete": `${req.query.term}`, 
                    "path": "title",
                    "fuzzy": {
                        "maxEdits": 2,
                    }
                }
            }
        ]).toArray();
        res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
});