var f = require('./6-module.js')

f(process.argv[2], process.argv[3], function(err, list) {
    if (err)
        console.log("error", err)

    list.forEach(function (x) {
        console.log(x)
    }) 
})
