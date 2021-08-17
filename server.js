let express = require("express")

let server = express();

server.get("/movies",function(req , res){
    res.send("movies data from server");
});

server.get("/genre",function(req , res){
    res.send("genre data from server");
});

server.listen(3000);