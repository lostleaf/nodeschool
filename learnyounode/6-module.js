var path = require('path')
var fs = require('fs')
module.exports = function (fpath, ext, callback) {
    fs.readdir(fpath, function (err, flist){
        if (err)
            return callback(err);
        
        var filtered = flist.filter(function (x){
            return path.extname(x) === '.' + ext 
        })

        callback(null, filtered)
    }) 
}
