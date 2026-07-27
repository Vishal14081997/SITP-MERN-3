
const express = require("express")

const server = express()
server.get("/",(req,res)=>{
    // console.log(req.headers); 
    console.log("hello world");
    res.send("hello vishal") 
})
server.post("/" ,(req,res)=>{
    console.log("post api");
    res.send("post api hit")
})
server.put("/" , (req,res)=>{
    console.log("put api");
    res.send("put api hit")
    
})
server.delete("/studentDelete" , (req,res)=>{
    console.log("studentDelete api");
    res.send("studentDelete success") 
})

server.listen(3000 ,()=>{
    console.log("server start 3000");
})






