module.exports = {
	darken: function(r,g,b) {
		return (0.2126*r)*.8 + (0.7152*g)*.8 + (0.0722*b)*.8;
	}
}

var luminosity = function(r,g,b) {
	return 0.2126*r + 0.7152*g + 0.0722*b;
}

// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);

console.log( luminosity(+process.argv[2],+process.argv[3],+process.argv[4]) );