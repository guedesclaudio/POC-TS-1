import express from "express"

const server = express()

server
    .use(express.json())

server.get("/status", (req, res) => {
    res.send("server it's on")
})

server.listen(4000, () => {console.log("Server listen on PORT 4000")})