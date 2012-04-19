require.config( {
	paths: {
		jQuery: 'libs/jquery/jquery',
		Class: 'libs/class/jrc-wrapper',
		Events: 'events/events'
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