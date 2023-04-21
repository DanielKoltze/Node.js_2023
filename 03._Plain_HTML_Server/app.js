import express from "express"
const app = express()

//at den static folder med frontend ligger i public mappen
//giver client lov til at se hvad der er i public mappen (security)
app.use(express.static("public"))

const PORT_NUMBER = 8080

import tankRouter from "./routers/tankRouter.js"
app.use(tankRouter)

import visitorsRouter from "./routers/visitorsRouter.js"
app.use(visitorsRouter)


//redirect from server side
//vigigt at man kun sender en request og en response
app.get("/api/guards", (req, res) => {
  if (req.query.passport == "theskyisblue") {
    res.redirect("/visitors")
    return
  }
  res.send({ message: "You are not allowed to see the tanks" })
})

app.get("/proxy", (req, res) => {
  /*
  fetch("https://www.google.com")
    .then((res) => res.text())
    .then((data) => res.send(data))
    */
})

app.listen(PORT_NUMBER, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Server running on port ", PORT_NUMBER)
  }
})
