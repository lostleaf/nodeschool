var http = require('http')
var bl = require('bl')
http.get(process.argv[2], function(response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error("error", err);

        var s = data.toString()
        console.log(s.length)
        console.log(s)
    }))
})
