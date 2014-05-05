var colorutil = require('./colorutil.js');

var result = colorutil.darken(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]) );
console.log(result);