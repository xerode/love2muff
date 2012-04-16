require.config( {
	paths: {
		jQuery: 'libs/jquery/jquery',
		Class: 'libs/class/jrc-wrapper'
	}
} );

require(
	[
		'app'
  	],
  	function( App ) {
		
	    App.initialise();

	}
);