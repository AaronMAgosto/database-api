// want to use all of our functions
import { db } from "./dbConnect.js";
// this is create in crud
export function addDocument(req,res) {
    console.log("test-before")
    const data = req.body
    db.collection("whatever") //collection is a function of databases 
    .add(data)
    .then(doc => res.status(201).send(' updated data'))
    .catch(err => res.status(500).send(err))
}

