import express from "express"

const app = express()
app.use(app.json())
app.use(express.static("../client/dist"))

const PORT = process.env.PORT || 8080

import planetRouter from "./routers/planets.js"
app.use(planetRouter)

import peopleRouter from "./routers/people.js"
app.use(peopleRouter)

app.listen(PORT, () => console.log("Server running at port " + PORT))


