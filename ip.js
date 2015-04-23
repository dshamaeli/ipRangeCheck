var fs = require('fs');
var file = process.argv.slice(2);
var _ = require('lodash');
var csv = require('csv');

var source = fs.readFileSync(file[0], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data
});
csv.parse(source, function(err, data){
  stuff(data);
});

function stuff(data) {
  var ipRef = [];
  var maskRef = [];
  data.forEach(function(entry) {
    ipRef[data.indexOf(entry)] = entry[0];
    maskRef[data.indexOf(entry)] = entry[1];
    
  });
  console.log(data);
  console.log(ipRef);
  console.log(maskRef);
}

