import express from "express";
import { Request, Response } from "express";
import MoviesRouter from "./routes/movies.route.js"

const server = express();

server
    .use(express.json())
    .use(MoviesRouter);

server.get("/status", (req: Request, res: Response) => {
    res.send("server it's on")
});

server.listen(process.env.PORT, () => {console.log("Server listen on PORT 4000")});