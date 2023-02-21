const express = require("express")
const app = express()

//at den static folder med frontend ligger i public mappen
//giver client lov til at se hvad der er i public mappen (security)
app.use(express.static("public"))


const PORT_NUMBER = 8080

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})


app.listen(PORT_NUMBER, (error) => {
    if (error){
        console.log(error)
    }else{
    console.log("Server running on port ", PORT_NUMBER)
    }
})


const obejct = {name: "hej", age: 22, lasdf: "asdf"}

console.log({...obejct, lasdf: "hello"})