import {Router} from "express"

const router = Router()

const tanks = [{ name: "big tank" }, { name: "small tank" }]

router.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
  })

  router.get("/api/tanks", (req, res) => {
    res.send({ data: tanks })
  })

export default router