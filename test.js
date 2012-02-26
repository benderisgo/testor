require("http").createServer(function(req, res){
    res.writeHead(200);
    res.end("yay! liftoff!");
    }).listen(process.env.PORT);