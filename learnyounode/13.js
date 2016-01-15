var http = require('http')
var url = require('url')

var port = Number(process.argv[2])
var server = http.createServer( function (req, res) {
    if (req.method === "GET") {
        u = url.parse(req.url, true)
        if (u.pathname === "/api/parsetime") {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            var date = new Date(u.query.iso)
            res.end(JSON.stringify({"hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()}))
        }

        if (u.pathname === "/api/unixtime") {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            var date = new Date(u.query.iso)
            res.end(JSON.stringify({"unixtime" : date.getTime()}))
        }
    }
})

server.listen(port)

