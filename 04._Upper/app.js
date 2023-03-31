import express from "express"
const app = express()

import path from "path"
import fs from "fs"

//to render on hml change u can use nodemon --etx html app.js

import templateEngine from "./util/templateEngine.js"
//components
const frontpagePath = templateEngine.readPage(
  "./public/pages/frontpage/frontpage.html"
)
const frontpagePage = templateEngine.renderPage(frontpagePath)
const jokesPath = templateEngine.readPage("./public/pages/jokes/jokes.html")
const jokesPage = templateEngine.renderPage(jokesPath, {
  tabTitle: "Jokes",
  cssLink: '<link rel="stylesheet" href="/assets/ccs/main.css">',
})
const irlQuestsPath = templateEngine.readPage(
  "./public/pages/IRLQuests/IRLQuests.html"
)
const irlQuestsPage = templateEngine.renderPage(irlQuestsPath, {
  tabTitle: "IRLQuests",
})

const contactPagePath = templateEngine.readPage(
  "./public/pages/contact/contact.html"
)
const contactPagePage = templateEngine.renderPage(contactPagePath, {
  tabTitle: "Contact",
})
app.use(express.static("public"))

//guess men gør det når man sender data i form
app.use(express.urlencoded({extended: true}))

import jokes from "./util/jokes.js"
//console.log(await jokes.getJoke())

app.get("/", (req, res) => {
  res.send(frontpagePage)
})

app.get("/IRLQuests", (req, res) => {
  res.send(irlQuestsPage)
})
app.get("/jokes", (req, res) => {
  res.send(jokesPage)
})

app.get("/contact", (req, res) => {
  res.send(contactPagePage)
})

app.post("/api/contact", (req, res) => {
  console.log(req.body)
  res.redirect("/")
})

const PORT = process.env.PORT || 8080
app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log("Server running on port", PORT)
})
