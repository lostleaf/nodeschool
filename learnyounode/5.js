var fs = require('fs')
var path = require('path')

var fpath = process.argv[2]
var ext = "." + process.argv[3]

fs.readdir(fpath, function (err, flist){
    for (var i = 0; i < flist.length; i++) {
        if (path.extname(flist[i]) === ext)
            console.log(flist[i])
    }
})
