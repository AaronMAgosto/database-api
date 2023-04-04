// to bring "express" usefellness into the current project 
import express from "express"
// to prevent stealing fronm other people
import cors from "cors"

import { addDocument } from "./src/dbFunctions.js"

const PORT = 3030
// make express a function
const app = express()
// if dont do this there a chance express wont let it work
app.use(cors())
//tells express the format its gonna be recievong data in
app.use(express.json())

app.post('/addDocument', addDocument)
//listenong in at the port awaitng connections
app.listen(PORT, () => {
    console.log(`listening in at http://localhost:${PORT}`)
})
 