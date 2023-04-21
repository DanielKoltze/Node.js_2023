import express from "express"


import dotenv from "dotenv"
dotenv.config()

console.log(process.env.TEST)

const app = express()


import helmet from "helmet"
app.use(helmet())

import path from "path"
app.use(express.static(path.resolve("../06._svelte_family/dist")))

import cors from "cors"
app.use(cors({
    credentials: true,
    origin: true
}))

import session from "express-session"

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //secure true siger bare at det skal være https og det er det ikke
}))

//Det er hvis vi vil gøre noget med at en bruger kan forsøge at logge ind flere gange

import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)

app.use("/auth", rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
)

import authRouter from "./routers/authRouter.js"
app.use(authRouter)



app.get("/piblings", (req,res)=> {
    res.send({data: ["John", "Mark"]})
})






import gothamRouter from "./routers/GothamRouter.js"
app.use(gothamRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, (error) => {
    console.log(`Server is running ${PORT}`)
})