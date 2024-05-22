const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hi! I am root");
});

app.get("/users", (req, res)=>{
    res.send("GET for users");
});

app.get("/users/:id", (req, res)=>{
    req.send("GET for user id");
});

app.post("/users", (req, res)=>{
    res.send("POST for users");
});

app.delete("/users/:id", (req,res)=>{
    res.send("DELETE for users ID");
});

app.listen(3000, ()=>{
    console.log("server is listening to 3000");
});