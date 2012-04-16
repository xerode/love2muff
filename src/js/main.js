require.config( {
	paths: {
		jQuery: 'libs/jquery/jquery',
		Class: 'libs/class/jrc-wrapper'
	}
} );

require(
	[
		'app',
  		'order!libs/jquery/jquery-1.7.2.min'
  	],
  	function( App ) {
		
	    App.initialise();

	}
);