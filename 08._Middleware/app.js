import express from "express"

const app = express()





function guard(req,res, next){
    if(req.query.name == "Daniel"){
        req.myName = "Daniel"
        return next()
    }
    res.send({message : "You are not allowed to enter"})
}

app.get("/frontdoor",guard, (req,res,next)=> {
    res.send({message: `Please Enter ${req.myName}`})
})


function houseButler(req,res,next){
    console.log("This way..")
    next()
}

app.use("/room", houseButler)

import roomRouter from "./routers/roomRouter.js"
app.use(roomRouter)

app.get("*", (req,res) => {
    res.send("<h1>404 - NotFound </h1>")
})

const PORT = 8080

app.listen(PORT, (error) => {
    console.log(`Server is running ${PORT}`)
})