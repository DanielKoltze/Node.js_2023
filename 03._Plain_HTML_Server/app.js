const express = require("express")
const app = express()

//at den static folder med frontend ligger i public mappen
//giver client lov til at se hvad der er i public mappen (security)
app.use(express.static("public"))

const PORT_NUMBER = 8080

const tanks = [{ name: "big tank" }, { name: "small tank" }]
let visitorsCount = 0

app.get("/tanks", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})
app.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html")
})

app.get("/api/tanks", (req, res) => {
  res.send({ data: tanks })
})

app.get("/api/visitors", (req, res) => {
  res.send({ data: visitorsCount })
})

app.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorsCount })
})

//redirect from server side
//vigigt at man kun sender en request og en response
app.get("/api/guards", (req, res) => {
  if (req.query.passport == "theskyisblue") {
    res.redirect("/visitors")
    return
  }
  res.send({ message: "You are not allowed to see the tanks" })
})

app.listen(PORT_NUMBER, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Server running on port ", PORT_NUMBER)
  }
})
