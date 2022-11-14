const express = require("express");
const searchRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

searchRoutes.route("/search").get( async (req, res) => {
    let db_connect = dbo.getDb("movie");
    try {
        movies = db_connect
            .collection("movies")
            .find({})
            .toArray(function (err, result) {
                if (err) throw err;
                res.json(result);
            });
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

module.exports = searchRoutes;