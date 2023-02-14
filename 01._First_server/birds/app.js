const express = require("express")
const app = express()

//used for post
app.use(express.json())

//list of my birds
const birds = [
    {id: "1", race: "Penguin"},
    {id: "2", race: "Parrot"},
    {id: "3", race: "Eagle"},
    {id: "4", race: "Owl"},
    {id: "5", race: "Ostrich"}
]

//get all
app.get("/birds", (req,res) => {
    res.send(birds)
})
//get specific
app.get("/birds/:id", (req,res) => {
    res.send(birds.find(bird => bird.id === req.params.id))
})

app.listen(8080, () => {
    console.log("port on 8080")
})