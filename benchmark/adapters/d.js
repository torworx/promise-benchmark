var d = require('d.js');

exports.defer = function () {
    var deferred = d();

    return {
        promise: deferred.promise,
        fulfill: deferred.resolve,
        resolve: deferred.resolve,
        reject: deferred.reject
    };
};

exports.fulfilled = d.resolved;
exports.rejected = d.rejected;
