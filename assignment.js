var readline = require('readline');
process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = [100];
var new_arr = new Array(100).fill(0);
process.stdout.write("Enter start,end and time");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
  var obj = {};
  console.log(line);
  var a = line.split(" ");
  obj['start'] = a[0];
  obj['end'] = a[1];
  obj['time'] = a[2];
  arr.push(obj);
  if (obj['end'] >= 100) {
    console.log(arr);
    console.log(heatmap(arr)); 
  }
});

function heatmap(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr[j].start; i <= arr[j].end - 1; i++) {
      new_arr[i] += parseInt(arr[j].time);
      // console.log("element", new_arr[i], i)
    }
  }
  return new_arr;
}