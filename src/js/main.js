require.config( {
	paths: {
		jQuery: 'libs/jquery/jquery'
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