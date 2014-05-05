var colorutils = require('./colorutil.js');
// colorutils becomes: 
//  {
	// luminosity: function(r,g,b) {
	// return 0.2126*r + 0.7152*g + 0.0722*b;
	// }
	// colorutils.luminosity for the function
var result = colorutils.luminosity(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]) );
console.log(result);


