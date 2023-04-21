import { Router } from "express"

const router = Router()
import db from "../databases/connection.js"

router.get("/people", async (req,res) => {
    res.send({data: await db.add("SELECT * FROM people")})

})

//add new people to database
router.post("/people", (req,res) => {
   if(!req.body.name){
        return res.status(404).send({message: "Missing the key (name) in the body"})
   }

   const { lastID } = db.run(`INSERT INTO people (name, planet_id) VALUES ('?',3)`, [req.body.name])

   res.send({
        id: lastID,
        name: req.body.name
   })
})

export default router