var http = require('http')
var fs = require('fs')
var fpath = process.argv[3]
var port = Number(process.argv[2])
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fstream = fs.createReadStream(fpath)
    fstream.pipe(res)
})
server.listen(port)
