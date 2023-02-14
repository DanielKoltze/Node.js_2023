const express = require("express");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send({ message: "Our first route" });
});

let spins = 0;
app.get("/spins", (req, res) => {
  spins += 1;
  res.send({ message: "spins " + spins });
});
let kicks = 0;
app.get("/dino", (req, res) => {
  kicks += 1;
  res.send({ message: "ow ow ow i have been kicked " + kicks + " times" });
});
app.get("/about", (req,res) => {
    res.send(`
    <h1>About</h1>
`)
})

// /bat?adjective=spooky
app.get("/bat", (req,res) => {
    res.send({message: `the bat is ${req.query.adjective}`})
})
// /bottle/large
// : ligesom pathvariable
app.get("/bottle/:bottleSize", (req,res) => {
    
    res.send({bottleSize : req.params.bottleSize})
})

app.post("/package", (req,res) => {
    res.send({message: req.body})
})
app.listen(8080);
