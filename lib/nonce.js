var counter = require('./counter.js')();

module.exports = function () {
  var now = new Date();
  var ms = now.getMilliseconds();
  now = +now;
  now *= 1000;
  now += ms;
  now += counter.no();
  counter.increment();
  return now;
};