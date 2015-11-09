/**
 * Created by adrian.squirm on 10/9/15.
 */
var curriedReadFile = function (path) {

    return function (b) {
        // Do something to path and then
        return result;
    };

};

var read = curriedReadFile(path);

read(function(err, data){
    if(err){
        throw err;
    }

    // Do something with data
});