var http = require('http')
var tmap = require('through2-map')
var port = Number(process.argv[2])
var server = http.createServer(function (req, res) {
    if (req.method === "POST") {
        req.pipe(tmap(function (chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res)
    }
})
server.listen(port)
