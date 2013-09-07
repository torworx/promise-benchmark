var vendors = [];
vendors.push('well');
vendors.push('when-1.8.1');
vendors.push('when-2');
vendors.push('deferred');
//vendors.push('promiscuous'); // nextTick using process.nextTick in node, will show (node) warning: Recursive process.nextTick detected.
//vendors.push('d'); // nextTick using process.nextTick in node, will show (node) warning: Recursive process.nextTick detected.
vendors.push('q');

module.exports = exports = vendors.reduce(function (result, name) {
    result[name] = require('./adapters/' + name);
    return result;
}, {});