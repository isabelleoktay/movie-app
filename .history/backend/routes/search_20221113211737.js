const express = require("express");
const searchRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

searchRoutes.route("/search").get( async (req, res) => {
    let db_connect = dbo.getDb();
    try {
        let result = await db_connect.collection("movie").aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.query}`,
                        "path": "title",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 3,
                        }
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