import express from "express";
var server = express();
server
    .use(express.json());
server.get("/status", function (req, res) {
    res.send("server it's on");
});
server.listen(4000, function () { console.log("Server listen on PORT 4000"); });
