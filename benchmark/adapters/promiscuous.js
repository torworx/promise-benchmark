var promiscuous = require('promiscuous');
var well = require('well');

exports.defer = function () {
    var deferred = promiscuous.deferred();

    return {
        promise: deferred.promise,
        fulfill: deferred.resolve,
        resolve: deferred.resolve,
        reject: deferred.reject
    };
};

exports.fulfilled = promiscuous.resolve;
exports.rejected = promiscuous.reject;

exports.all = well.all;