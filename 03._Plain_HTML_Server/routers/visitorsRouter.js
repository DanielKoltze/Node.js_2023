import {Router} from "express"

const router = Router()



let visitorsCount = 0

router.get("/visitors", (req, res) => {
  res.sendFile(__dirname + "/public/visitors/visitors.html")
})


router.get("/api/visitors", (req, res) => {
  res.send({ data: visitorsCount })
})

router.put("/api/visitors", (req, res) => {
  res.send({ data: ++visitorsCount })
})


export default router