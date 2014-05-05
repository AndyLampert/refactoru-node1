module.exports = {
	luminosity: function(r,g,b) {
		return 0.2126*r + 0.7152*g + 0.0722*b;
	},
	darken: function(r,g,b) {
		return .8*r + ' ' + .8*g + ' ' + b*.8;
	}
};