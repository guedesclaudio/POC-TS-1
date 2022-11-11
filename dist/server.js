import express from "express";
import MoviesRouter from "./routes/movies.route.js";
var server = express();
server
    .use(express.json())
    .use(MoviesRouter);
server.get("/status", function (req, res) {
    res.send("server it's on");
});
server.listen(process.env.PORT, function () { console.log("Server listen on PORT 4000"); });
