import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';

const router = express.Router();
let userId = 0;

//Lists all the records in the database
router.get("/", async(req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
});

//Get a single record by id
router.get("/:id", async(req, res) => {
    let collection = await db.collection("users");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})

//Create a new record
router.post("/", async(req, res) => {
    let newDoucment = {
        _id: userId,
        name: req.body.name,
        wordBank: {}
    };

    userId++;

    let collection = db.collection("users");
    let result = await collection.insertOne(newDoucment);

    res.send(result).status(204);
});

//Update a record by id
router.patch("/:id", async(req, res) => {
    const query = {_id: new ObjectId(req.params.id)};

    const updates = {
        $set: {
            name: req.body.name,
            password: req.body.password
        }
    };

    let collection = await db.collection("users");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

router.delete("/:id", async(req, res) => {
    const query = {_id: new ObjectId(req.params.id)};
    const collection = db.collection("users");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
})

export default router;