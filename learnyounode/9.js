var http = require('http')
var bl = require('bl')

var results = Array()
var cnt = 0

function doit (url, idx) {
    http.get(process.argv[i], function (response) {
        response.setEncoding('utf8')
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            results[idx] = data.toString()
            cnt++
            if (cnt === 3)
                results.forEach(function (x) {
                    console.log(x)
                })
        }))
    })
}

for (var i = 2; i < 5; i++) {
    doit(process.argv[i], i - 2)
}
