var Benchmark = require('../benchmark');
var vendors = require('../vendors');

var benchmark = Benchmark('promise-fulfill');

Object.keys(vendors).forEach(function (name) {
    benchmark.add(name, execute(vendors[name]));
});

benchmark.run(10000, 20);

function execute(vendor) {
    var i = 0;
    return function () {
        vendor.fulfilled(i++);
    }
}