/*global exports console require  */
var fs = require('fs');
//var file = process.argv.slice(2);
var _ = require('lodash');
var rangeCheck = require('range_check');
//var csv = require('csv');

var source = fs.readFileSync('source.txt' , 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data
});
var data = source.replace(/\t/g,'/').split('\n');
//console.log(data);
//console.log(rangeCheck.inRange(
//  '188.208.144.16',data));

function ipRange(ip) {
  return rangeCheck.inRange(ip,data);
}

exports.rangeCheck = ipRange;