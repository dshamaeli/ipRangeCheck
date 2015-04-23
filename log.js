/*global  */
var fs = require('fs');
var _ = require('underscore');
var file = process.argv.slice(2);
var rangeCheck = require('./rangecheck').rangeCheck;
//synchronously Read a log file

var log = fs.readFileSync(file[0], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data
}); 

// divide log sting 

var log2 = log.split('\n'),
    temp,
    logIp = [];

//extract IP  form log

log2.forEach(function(entry){
  temp = entry.match(/\d+\.\d+\.\d+\.\d+/);
  if (!temp) return;
  logIp.push(temp[0]);
});

//store uniq IPs

var uniqIps = _.uniq(logIp);
var validIp = 0;
uniqIps.forEach(function(ip) {
  if (rangeCheck(ip)) {
    validIp++;
  }
});
console.log("Total IPs: "+uniqIps.length+"\nValid IPs: "+validIp+"\n% :"+((validIp/ uniqIps.length)*100).toFixed(2));


