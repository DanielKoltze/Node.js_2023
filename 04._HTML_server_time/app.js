const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static('public'))

//timestamp post and get delete
//btn put, delete and get
let timestampIds = 1
const timestamps = [
    {id: "1", timestamp: new Date().toUTCString()}
]

// without the static this would work but not what the html refers to for instance css and/or js
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/animals.html")
})


app.get('/api/timestamps', (req,res) =>{
    res.send({data: timestamps})
})
app.post('/api/timestamps', (req,res) => {
    const timestamp = {id : ++timestampIds, timestamp : new Date().toUTCString()}
    timestamps.push(timestamp)
    res.send(timestamp)
})
app.delete('/api/timestamps/:id', (req,res) => {
    const foundTimestampId = timestamps.findIndex(timestamp => timestamp.id == req.params.id)
    console.log(foundTimestampId)
    if(foundTimestampId == -1){
        res.status(404).send({message: `bird with ${req.params.id} was not found`})
    } else{
        const timestamp = timestamps.splice(foundTimestampId,1)
        res.send(timestamp)
    }
})


let clicked = 0


app.get('/api/clicked', (req,res) =>{
    res.send({data : clicked})
})

app.put('/api/clicked', (req,res) =>{
    res.send({data : ++clicked})
})




app.listen(8080, error => {
    if (error){
        console.log(error)
    }else{
    console.log("Server running on port ", 8080)
    }
})