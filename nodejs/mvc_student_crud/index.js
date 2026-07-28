import express from "express"
import dbConnect from "./config/db.js"
import authRoute from "./routes/authRoute.js"


import dotenv from "dotenv"
dotenv.config()


const server = express()
dbConnect()

server.use(express.json())
server.use("/auth", authRoute)

let port = process.env.PORT

server.listen(port, () => {
    console.log(`server start ${port}`)
})

// mvc - model view controllers
