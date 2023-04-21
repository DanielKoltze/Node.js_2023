import { Router } from "express"

const router = Router()
import db from "../databases/connection.js"

router.get("/", async (req,res) => {
    const test = await db.all("SELECT * FROM planets")
    console.log(test)
    
    res.send({message: ""})
})


export default router