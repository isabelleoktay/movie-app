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

searchRoutes.route("/get/:id", async (req, res) => {
    let db_connect = dbo.getDb();
    try {
        let result = await db_connect.collection("movie").findOne({ "_id": ObjectID(request.params.id) });
        response.send(result);
    } catch (e) {
        response.status(500).send({ message: e.message });
    }
});

module.exports = searchRoutes;