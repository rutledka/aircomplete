module.exports = function( config ) {
	config.set( {
		files: [
			"node_modules/jquery/dist/jquery.js",
			"dist/jquery.aircomplete.min.js",
			"test/setup.js",
			"test/spec/*"
		],
		frameworks: [ "qunit" ],
		autoWatch: true
	} );
};
