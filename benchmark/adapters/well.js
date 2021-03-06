var well = require('well');

exports.defer = function () {
    var deferred = well.defer();

    return {
        promise: deferred.promise,
        fulfill: deferred.resolve,
        resolve: deferred.resolve,
        reject: deferred.reject
    };
};

exports.fulfilled = well.fulfilled;
exports.rejected = well.rejected;

exports.all = well.all;
exports.map = well.map;
exports.reduce = well.reduce;