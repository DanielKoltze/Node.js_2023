const express = require("express")
const app = express()

//used for parsing data in the body as json
app.use(express.json())


//list of my birds
const birds = [
    {id: "1", race: "Penguin"},
    {id: "2", race: "Parrot"},
    {id: "3", race: "Eagle"},
    {id: "4", race: "Owl"},
    {id: "5", race: "Ostrich"}
]


let ids = birds.length

//get all
app.get("/birds", (req,res) => {
    // res.send({data: birds})
    res.send(birds)
})
//get specific
app.get("/birds/:id", (req,res) => {
    //res.send({ data:birds.find(bird => bird.id === Number(req.params.id))})
    res.send(birds.find(bird => bird.id === req.params.id))
})


app.post("/birds", (req,res) => {
    if(req.body.race){
        ids += 1
        const bird = {
            id: ids,
            race: req.body.race
        }
        birds.push({bird})
        res.send({data: bird})
    }else{
        res.status(404).send("Bird wasnt created")
    }
})

app.patch("/birds/:id", (req,res) => {
    const {race} = req.body
    const bird = birds.find(bird => bird.id === req.params.id)
    if(bird && race){
    bird.race = race
    res.send(bird)
    }else{
        res.status(404).send("Bird wasnt updated")
    }

})


app.delete("/birds/:id", (req,res) => {
    const bird = birds.find(bird => bird.id === req.params.id)
    if(bird){
    birds.splice(birds.findIndex(b => b.id === bird.id),1)
    res.send("bird with id: " + req.params.id + " has been removed")
    }else{
        res.status(404).send("Bird wasnt deleted")
    }
})

app.listen(8080, () => {
    console.log("port on 8080")
})
